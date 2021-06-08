export interface AntivenomEntriesDataElementData {
    id: string;
    prop: string;
    disabled?: boolean;
    recommendedProductsSelector?: boolean;
}

export interface AntivenomEntriesGroupData {
    id: string;
    title: string;
    info?: string;
    addEntryButton: string;
    dataElements: AntivenomEntriesDataElementData[];
}

export interface AntivenomEntries {
    section: number;
    groups: AntivenomEntriesGroupData[];
}
