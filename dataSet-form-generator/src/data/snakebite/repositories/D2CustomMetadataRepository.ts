import { CustomMetadata } from "../../../domain/snakebite/CustomMetadata";
import { CustomMetadataRepository } from "../../../domain/snakebite/repositories";
import { DataStoreClient } from "../../common/clients/DataStoreClient";

export class D2CustomMetadataRepository implements CustomMetadataRepository {
    constructor(private dataStoreClient: DataStoreClient) {}

    async get(): Promise<CustomMetadata> {
        const key = "customMetadata";
        const customMetadata = await this.dataStoreClient.get<CustomMetadata>(key);

        //TODO: move to use case if this logic increase as to has sense
        if (!customMetadata) {
            throw new Error(
                `Does not exist a required ${this.dataStoreClient.namespace} namespace with a ${key} key in the data store`
            );
        }

        if (!customMetadata.subnationalEpidemiologicalDataDataSet) {
            throw new Error(
                `Does not exist a required prop subnationalEpidemiologicalDataDataSet in ${this.dataStoreClient.namespace} namespace and ${key} key in the data store`
            );
        }

        if (!customMetadata.subnationalStockDataDataSet) {
            throw new Error(
                `Does not exist a required prop subnationalStockDataDataSet in ${this.dataStoreClient.namespace} namespace and ${key} key in the data store`
            );
        }

        return customMetadata;
    }
}
