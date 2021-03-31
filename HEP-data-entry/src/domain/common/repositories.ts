import { MetadataOptions, MetadataPayload, MetadataResponse } from "../../data/common/clients/Dhis2MetadataClient";
import { DataSet } from "./entities";

export interface DataSetRepository {
    get(dataSetId: string): Promise<DataSet>
    saveCustomForm(payload: MetadataPayload, options: MetadataOptions): Promise<MetadataResponse>
}