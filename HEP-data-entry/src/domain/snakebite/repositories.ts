import { AntivenomEntries } from "./AntivenomEntries";
import { CustomMetadata } from "./CustomMetadata";

export interface CustomMetadataRepository {
    get(): Promise<CustomMetadata>
}

export interface AntivenomEntriesRepository {
    get(): Promise<AntivenomEntries>
}