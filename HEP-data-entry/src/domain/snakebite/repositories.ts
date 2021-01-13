import { CustomMetadata } from "./CustomMetadata";

export interface CustomMetadataRepository {
    get(): Promise<CustomMetadata>
}