
export interface AntivenomEntriesDataElementData {
    id: string,
    prop: string
    disabled?: boolean,
    recommendedProductsSelector?: boolean
}

export interface AntivenomEntriesGroupData {
    title: string;
    info?: string;
    dataElements: AntivenomEntriesDataElementData[];
}

export interface AntivenomEntries {
    section: number;
    groups: AntivenomEntriesGroupData[];
}