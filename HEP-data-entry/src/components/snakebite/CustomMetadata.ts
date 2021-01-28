interface DataElementData {
    name?: string;
    totalName?: string;
    info?: string;
}

interface OptionComboData {
    name?: string;
    info?: string;
    order?: number;
}

export interface CustomMetadata {
    dataElements: Record<string, DataElementData>;
    optionCombos: Record<string, OptionComboData>;
}