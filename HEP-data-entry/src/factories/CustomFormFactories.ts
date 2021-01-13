import { AssembledFormHTML } from "../components/hepatitis/AssembledFormHTML";
import SubnationalSingleCustomForm from "../components/module1_subnational_single/CustomForm";
import { SnakeBiteCustomForm } from "../components/snakebite/SnakeBiteCustomForm";
import { DataSet } from "../domain/common/entities";
import { DataSetRepository } from "../domain/common/repositories";
import { CustomMetadataRepository } from "../domain/snakebite/repositories";

export interface CustomFormFactory {
    createCustomForm(dataSet: DataSet): Promise<string>
}

export class HepatitisCustomFormFactory implements CustomFormFactory {
    async createCustomForm(dataSet: DataSet): Promise<string> {
        return await AssembledFormHTML(dataSet);
    }
}

export class Module1SubnationalSingleEntryCustomFormFactory implements CustomFormFactory {
    async createCustomForm(dataSet: DataSet): Promise<string> {
        return await SubnationalSingleCustomForm(dataSet);
    }
}

export class SnakeBiteCustomFormFactory implements CustomFormFactory {
    constructor(
        private dataSetRepository: DataSetRepository,
        private customMetadataRepository: CustomMetadataRepository) { }

    async createCustomForm(dataSet: DataSet): Promise<string> {
        const customMetadata = await this.customMetadataRepository.get();

        const subnationalDataSet = await this.dataSetRepository.get(customMetadata.subnationalDataSet);

        return await SnakeBiteCustomForm(dataSet, subnationalDataSet, customMetadata)
    }
}