import { ArgumentParser } from "argparse";
import * as _ from "lodash";

import { getUid, prettyJSON } from "./utils";
import { DataEntryForm } from "./domain/common/entities";
import { Dhis2MetadataClient, MetadataPayload } from "./data/common/clients/Dhis2MetadataClient";
import { DataStoreClient } from "./data/common/clients/DataStoreClient";
import { D2DataSetRepository } from "./data/common/repositories/D2DataSetRepository";
import { DataSetRepository } from "./domain/common/repositories";
import { D2CustomMetadataRepository } from "./data/snakebite/repositories/D2CustomMetadataRepository";
import { CustomFormFactory, HepatitisCustomFormFactory, Module1SubnationalSingleEntryCustomFormFactory, SnakeBiteCustomFormFactory } from "./factories/CustomFormFactories";

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
    dataSetRepository: DataSetRepository,
    customFormFactory: CustomFormFactory,
    dataSetId: string,
): Promise<MetadataPayload> {
    const dataSet = await dataSetRepository.get(dataSetId);

    const customFormHtml = await customFormFactory.createCustomForm(dataSet);

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

function createFactory(module: Module, dataSetRepository: DataSetRepository, url: string): CustomFormFactory {
    if (module === "hepatitis") {
        return new HepatitisCustomFormFactory();
    } else if (module === "snakebite") {

        const customMetadataRepository = new D2CustomMetadataRepository(new DataStoreClient(url, "snake-bite"));

        return new SnakeBiteCustomFormFactory(dataSetRepository, customMetadataRepository);
    } else if (module === "module1_subnational_single_entry") {
        return new Module1SubnationalSingleEntryCustomFormFactory();
    } else {
        throw new Error(`Does not exist a custom form for module ${module}`);
    }
}

async function main(): Promise<void> {
    const args = getParser().parseArgs();
    const dataSetRepository = new D2DataSetRepository(new Dhis2MetadataClient(args.url, { debug: true }));

    const dataSetId = args.dataset_id;

    try {
        const factory = createFactory(args.module, dataSetRepository, args.url);
        const payload = await getDataSetPayload(dataSetRepository, factory, dataSetId);

        const response = await dataSetRepository.saveCustomForm(payload, {});

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
