import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import {
    Dhis2Metadata,
    DataSet,
    DataEntryForm,
    MetadataPayload
} from "./Dhis2Metadata";
import { CustomFormExample } from "./components/CustomFormExample";
import { getResource } from "./utils";

import { getUid, prettyJSON } from "./utils";

function getParser(): ArgumentParser {
    const parser = new ArgumentParser({
        version: "0.0.1",
        addHelp: true,
        description: "Argparse example"
    });

    parser.addArgument(["-u", "--url"], {
        required: true,
        help: "DHIS2 instance URL: http[s]://username:password@server:port"
    });

    parser.addArgument(["-d", "--dataset-id"], {
        required: true,
        help: "DATASET_ID"
    });

    return parser;
}

async function getDataSetPayload(
    d2Metadata: Dhis2Metadata,
    dataSetId: string
): Promise<MetadataPayload> {
    const { dataSets } = await d2Metadata.get<{ dataSets: DataSet[] }>({
        "dataSets:fields": ":owner",
        "dataSets:filter": `id:eq:${dataSetId}`
    });
    const dataSet = _.first(dataSets || []);

    if (!dataSet) {
        throw new Error(`Cannot find dataset with id ${dataSetId}`);
    }

    const customFormHtml = await getCustomFormHtml();
    const formId = dataSet.dataEntryForm
        ? dataSet.dataEntryForm.id
        : getUid(dataSet.id);

    const dataEntryForm: DataEntryForm = {
        id: formId,
        name: formId,
        htmlCode: customFormHtml,
        style: "NONE"
    };

    const dataSetWithForm = {
        ...dataSet,
        dataEntryForm: { id: dataEntryForm.id }
    };

    return {
        dataSets: [dataSetWithForm],
        dataEntryForms: [dataEntryForm]
    };
}

async function getCustomFormHtml(): Promise<string> {
    const html = CustomFormExample({});
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");
    const styleHtml = `<style>${style}</style>`;
    const javascriptHtml = `<script type="text/javascript">${javascript}</script>`;
    return styleHtml + javascriptHtml + html;
}

async function main(): Promise<void> {
    const args = getParser().parseArgs();
    const d2Metadata = new Dhis2Metadata(args.url, { debug: true });
    const dataSetId = args.dataset_id;
    const payload = await getDataSetPayload(d2Metadata, dataSetId);
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
