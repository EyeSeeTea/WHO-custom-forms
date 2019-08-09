import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import { Dhis2Metadata, Program, MetadataPayload, DataEntryForm } from "./Dhis2Metadata";
import { AssembledFormHTML } from "./components/AssembledFormHTML";

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
                    id,
                    dataElement[
                        id,
                        dataElementGroups[
                            id,
                            dataElements[
                                id,name,formName,valueType,shortName, 
                                attributeValues[value,attribute[code]],
                                optionSet[id],
                            ],
                            code,
                            shortName,
                            attributeValues[value,attribute[code],
                        ]
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

    const customFormHtml = await AssembledFormHTML({ programStage });

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
