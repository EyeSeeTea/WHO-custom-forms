
export interface AntivenomEntriesDataElement {
    id: string,
    prop: string
}

export interface AntivenomEntriesGroup {
    title?: string;
    dataElements: AntivenomEntriesDataElement[];
}

export interface AntivenomEntries {
    section: number;
    groups: AntivenomEntriesGroup[];
}