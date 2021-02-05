interface DataElementData {
    backgroundColor?: string;
    color?: string;
    name?: string;
    info?: string;
    showTotal?: boolean,
    showName?: boolean,
    totalName?: string;
}

interface OptionComboData {
    backgroundColor?: string;
    color?: string;
    name?: string;
    info?: string;
    order?: number;
}

export interface CustomMetadata {
    subnationalDataSet: string,
    dataElements: Record<string, DataElementData>;
    optionCombos: Record<string, OptionComboData>;
}