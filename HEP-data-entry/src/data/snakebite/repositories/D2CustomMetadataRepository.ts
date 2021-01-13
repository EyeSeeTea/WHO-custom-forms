import { CustomMetadata } from "../../../domain/snakebite/CustomMetadata";
import { CustomMetadataRepository } from "../../../domain/snakebite/repositories";
import { DataStoreClient } from "../../common/clients/DataStoreClient";

export class D2CustomMetadataRepository implements CustomMetadataRepository {
    constructor(private dataStoreClient: DataStoreClient) { }

    async get(): Promise<CustomMetadata> {
        const namespace = "snake-bite";
        const key = "customMetadata";
        const customMetadata = await this.dataStoreClient.get<CustomMetadata>(key);

        //TODO: move to use case if this logic increase as to has sense
        if (!customMetadata) {
            throw new Error(`Does not exist a required ${namespace} namespace with a ${key} key in the data store`);
        }

        if (!customMetadata.subnationalDataSet) {
            throw new Error(`Does not exist a required prop subnationalDataSet in ${namespace} namespace and ${key} key in the data store`);
        }

        return customMetadata;
    }
}