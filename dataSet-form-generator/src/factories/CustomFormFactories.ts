import { AssembledFormHTML } from "../components/hepatitis/AssembledFormHTML";
import SubnationalSingleCustomForm from "../components/module1_subnational_single/CustomForm";
import { SnakeBiteCustomForm } from "../components/snakebite/SnakeBiteCustomForm";
import { DataSet } from "../domain/common/entities";
import { DataSetRepository } from "../domain/common/repositories";
import {
    AntivenomEntriesRepository,
    CustomMetadataRepository,
} from "../domain/snakebite/repositories";

export interface CustomFormFactory {
    createCustomForm(dataSet: DataSet): Promise<string>;
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
        private customMetadataRepository: CustomMetadataRepository,
        private antivenomEntriesRepository: AntivenomEntriesRepository
    ) {}

    async createCustomForm(dataSet: DataSet): Promise<string> {
        const customMetadata = await this.customMetadataRepository.get();

        const subnationalStockDataDataSet = await this.dataSetRepository.get(
            customMetadata.subnationalStockDataDataSet.id
        );
        const subnationalEpidemiologicalDataDataSet = await this.dataSetRepository.get(
            customMetadata.subnationalEpidemiologicalDataDataSet.id
        );
        const antivenomEntries = await this.antivenomEntriesRepository.get();

        return await SnakeBiteCustomForm(
            dataSet,
            subnationalStockDataDataSet,
            subnationalEpidemiologicalDataDataSet,
            customMetadata,
            antivenomEntries
        );
    }
}
