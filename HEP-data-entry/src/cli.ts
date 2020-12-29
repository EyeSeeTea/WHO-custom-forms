import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import { AssembledFormHTML } from "./components/hepatitis/AssembledFormHTML";
import { getUid, prettyJSON } from "./utils";
import { SnakeBiteCustomForm } from "./components/snakebite/SnakeBiteCustomForm";
import { DataEntryForm } from "./models/d2Models";
import { Dhis2Metadata, MetadataPayload, DataSet } from "./models/Dhis2Metadata";
import SubnationalSingleCustomForm from "./components/module1_subnational_single/CustomForm";
import { DataStoreClient } from "./data/DataStoreClient";
import { CustomFormData } from "./components/snakebite/CustomFormData";

type Module = "hepatitis" | "snakebite" | "module1_subnational_single_entry";

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

    parser.addArgument(["-m", "--module"], {
        required: true,
        help: "module: hepatitis, snakebite, module1_subnational_single_entry",
    });

    return parser;
}

async function getDataSetPayload(
    d2Metadata: Dhis2Metadata,
    dataSetId: string,
    module: Module,
    url: string
): Promise<MetadataPayload> {
    const { dataSets } = await d2Metadata.get<{ dataSets: DataSet[] }>({
        "dataSets:fields": `:owner,
            sections[
                id,
                description,
                displayName,
                greyedFields[id,dataElement,categoryOptionCombo],
                dataElements[id,description,code,formName,categoryCombo[id,categoryOptionCombos[id,name,categoryOptions[id,code]]],
                valueType]
            ]`,
        "dataSets:filter": `id:eq:${dataSetId}`,
    });
    const dataSet = _.first(dataSets || []);

    if (!dataSet) {
        throw new Error(`Cannot find dataset with id ${dataSetId}`);
    }

    const customFormHtml = await createCustomForm(dataSet, module, url);

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

async function createCustomForm(dataSet: DataSet, module: Module, url: string) {
    if (module === "hepatitis") {
        return await AssembledFormHTML(dataSet);
    } else if (module === "snakebite") {
        const dataStoreClient = new DataStoreClient(url, "snake-bite");
        const customFormData = await dataStoreClient.get<CustomFormData>("customFormData");

        if (!customFormData) {
            throw new Error(`Does not exist a required snake-bite namespace with a customFormData key in the data store`);
        }

        return await SnakeBiteCustomForm(dataSet, customFormData);
    } else if (module === "module1_subnational_single_entry") {
        return await SubnationalSingleCustomForm(dataSet);
    } else {
        throw new Error(`Does not exist a custom form for module ${module}`);
    }
}

async function main(): Promise<void> {
    const args = getParser().parseArgs();
    const d2Metadata = new Dhis2Metadata(args.url, { debug: true });
    const dataSetId = args.dataset_id;

    try {
        const payload = await getDataSetPayload(d2Metadata, dataSetId, args.module, args.url);

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
    } catch (error) {
        console.log(error.message);
    }
}

main();
