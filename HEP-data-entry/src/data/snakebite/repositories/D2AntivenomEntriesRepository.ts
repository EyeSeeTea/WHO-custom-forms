import { AntivenomEntries } from "../../../domain/snakebite/AntivenomEntries";
import { AntivenomEntriesRepository } from "../../../domain/snakebite/repositories";
import { DataStoreClient } from "../../common/clients/DataStoreClient";

export class D2AntivenomEntriesRepository implements AntivenomEntriesRepository {
    constructor(private dataStoreClient: DataStoreClient) { }

    async get(): Promise<AntivenomEntries> {
        const key = "antivenomEntries";
        const antivenomEntries = await this.dataStoreClient.get<AntivenomEntries>(key);

        //TODO: move to use case if this logic increase as to has sense
        if (!antivenomEntries) {
            throw new Error(`Does not exist a required ${this.dataStoreClient.namespace} namespace with a ${key} key in the data store`);
        }

        return antivenomEntries;
    }
}