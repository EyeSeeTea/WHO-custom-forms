interface DataElementData {
    backgroundColor?: string;
    color?: string;
    name?: string;
    info?: string;
    showTotal?: boolean;
    showName?: boolean;
    totalName?: string;
    defaultCatOptionComboName?: string;
}

interface OptionComboData {
    backgroundColor?: string;
    color?: string;
    name?: string;
    info?: string;
    order?: number;
}

interface SubnationalDataSet {
    id: string;
    name: string;
}

export interface CustomMetadata {
    dataElements: Record<string, DataElementData>;
    optionCombos: Record<string, OptionComboData>;
    subnationalStockDataDataSet: SubnationalDataSet;
    subnationalEpidemiologicalDataDataSet: SubnationalDataSet;
}
