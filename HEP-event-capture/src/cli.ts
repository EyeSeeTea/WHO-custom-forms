import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import { Dhis2Metadata, Program, MetadataPayload, DataEntryForm } from "./Dhis2Metadata";
import { Form } from "./models/Form";
import { getResource } from "./utils";

import { getUid, prettyJSON } from "./utils";

function getParser(): ArgumentParser {
    const parser = new ArgumentParser({
        version: "0.0.1",
        addHelp: true,
        description: "Argparse example",
    });

    parser.addArgument(["-u", "--url"], {
        required: true,
        help: "DHIS2 instance URL: http[s]://username:password@server:port",
    });

    parser.addArgument(["-d", "--program-id"], {
        required: true,
        help: "PROGRAM_ID",
    });

    return parser;
}

async function getProgramPayload(
    d2Metadata: Dhis2Metadata,
    programId: string
): Promise<MetadataPayload> {
    const { programs } = await d2Metadata.get<{ programs: Program[] }>({
        "programs:fields": `:all,
            programStages[
                :all,
                programStageDataElements[
                    dataElement[
                        id,name,formName,valueType,
                        optionSet[id]
                    ]
                ]`,
        "programs:filter": `id:eq:${programId}`,
    });
    const program = _.first(programs || []);

    if (!program) {
        throw new Error(`Cannot find program with id ${programId}`);
    } else if (program.programStages.length > 1) {
        throw new Error("Program provided has more than one programStage");
    }

    const programStage = program.programStages[0];

    const formHtml = Form.getFormHtml(programStage);
    const customFormHtml = await getAssembledHtml(formHtml, program.id);

    const formId = programStage.dataEntryForm ? programStage.dataEntryForm.id : getUid(program.id);

    const dataEntryForm: DataEntryForm = {
        id: formId,
        name: formId,
        htmlCode: customFormHtml,
        style: "NONE",
    };

    const programStageWithForm = {
        ...programStage,
        formType: "CUSTOM",
        dataEntryForm: { id: dataEntryForm.id },
    };

    return {
        programStages: [programStageWithForm],
        dataEntryForms: [dataEntryForm],
    };
}

async function getAssembledHtml(formHtml: string, programId: string): Promise<string> {
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");
    const styleHtml = `<style>${style}</style>`;
    const javascriptHtml = `<script id="custom-form-script" type="text/javascript" programId=${programId}>${javascript}</script>`;
    const fontAwesome = `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">`;
    return styleHtml + javascriptHtml + fontAwesome + formHtml;
}

async function main(): Promise<void> {
    const args = getParser().parseArgs();
    const d2Metadata = new Dhis2Metadata(args.url, { debug: true });
    const programId = args.program_id;
    const payload = await getProgramPayload(d2Metadata, programId);

    const response = await d2Metadata.post(payload, {});

    if (response.status !== "OK") {
        console.error("Error posting metadata");
        console.error(prettyJSON(response));
        process.exit(1);
    } else {
        console.log(prettyJSON(response));
        console.log("Done");
        process.exit(0);
    }
}

main();
