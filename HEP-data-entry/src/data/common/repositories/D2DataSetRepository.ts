import _ = require("lodash");
import { DataSet } from "../../../domain/common/entities";
import { DataSetRepository } from "../../../domain/common/repositories";
import { Dhis2MetadataClient, MetadataOptions, MetadataPayload, MetadataResponse } from "../clients/Dhis2MetadataClient";

export class D2DataSetRepository implements DataSetRepository {
    constructor(private dhis2MetadataClient: Dhis2MetadataClient) { }

    async get(dataSetId: string): Promise<DataSet> {
        const { dataSets } = await this.dhis2MetadataClient.get<{ dataSets: DataSet[]; }>({
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
        return dataSet;
    }

    async saveCustomForm(payload: MetadataPayload, options: MetadataOptions): Promise<MetadataResponse> {
        return await this.dhis2MetadataClient.post(payload, options)
    }
}