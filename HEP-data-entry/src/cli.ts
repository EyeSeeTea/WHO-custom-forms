import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import { Dhis2Metadata, DataSet, MetadataPayload } from "./Dhis2Metadata";
import { DataEntryForm } from "./models/Form";
import { AssembledFormHTML } from "./components/AssembledFormHTML";
import { getUid, prettyJSON, safeParseJSON } from "./utils";
import fetch from "node-fetch";

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

    parser.addArgument(["-d", "--dataset-id"], {
        required: true,
        help: "DATASET_ID",
    });

    return parser;
}

async function getUserLocale(baseUrl: string) {
    const userSettings = await fetch(`${baseUrl}/api/userSettings.json`, {
        method: "GET",
    }).then(safeParseJSON);
    console.log(userSettings);
    return userSettings["keyUiLocale"];
}

async function getDataSetPayload(
    d2Metadata: Dhis2Metadata,
    dataSetId: string,
    userLocale: string
): Promise<MetadataPayload> {
    const { dataSets } = await d2Metadata.get<{ dataSets: DataSet[] }>({
        "dataSets:fields": `:owner,
            sections[
                id,
                description,
                displayName,
                translations,
                greyedFields[id,dataElement,categoryOptionCombo],
                dataElements[id,description,code,formName,translations,categoryCombo[id,categoryOptionCombos[id,name]],
                valueType]
            ]`,
        "dataSets:filter": `id:eq:${dataSetId}`,
    });
    const dataSet = _.first(dataSets || []);

    if (!dataSet) {
        throw new Error(`Cannot find dataset with id ${dataSetId}`);
    }

    const customFormHtml = await AssembledFormHTML({ dataSet, userLocale });

    const formId = dataSet.dataEntryForm ? dataSet.dataEntryForm.id : getUid(dataSet.id);

    const dataEntryForm: DataEntryForm = {
        id: formId,
        name: formId,
        htmlCode: customFormHtml,
        style: "NONE",
    };

    const dataSetWithForm = {
        ...dataSet,
        dataEntryForm: { id: dataEntryForm.id },
    };

    return {
        dataSets: [dataSetWithForm],
        dataEntryForms: [dataEntryForm],
    };
}

async function main(): Promise<void> {
    const args = getParser().parseArgs();
    const d2Metadata = new Dhis2Metadata(args.url, { debug: true });
    const dataSetId = args.dataset_id;
    const userLocale = await getUserLocale(args.url);
    const payload = await getDataSetPayload(d2Metadata, dataSetId, userLocale);

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
