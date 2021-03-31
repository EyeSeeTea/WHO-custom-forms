import { AntivenomEntries } from "../../../domain/snakebite/AntivenomEntries";
import { AntivenomEntriesRepository } from "../../../domain/snakebite/repositories";
import { DataStoreClient } from "../../common/clients/DataStoreClient";
import { antivenomEntriesKey } from "../constants";

export class D2AntivenomEntriesRepository implements AntivenomEntriesRepository {
    constructor(private dataStoreClient: DataStoreClient) { }

    async get(): Promise<AntivenomEntries> {
        const antivenomEntries = await this.dataStoreClient.get<AntivenomEntries>(antivenomEntriesKey);

        //TODO: move to use case if this logic increase as to has sense
        if (!antivenomEntries) {
            throw new Error(`Does not exist a required ${this.dataStoreClient.namespace} namespace with a ${antivenomEntriesKey} key in the data store`);
        }

        return antivenomEntries;
    }
}