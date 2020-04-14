import { Ref } from "./Dhis2Metadata";

export interface DataEntryForm {
    id: string;
    name: string;
    htmlCode: string;
    style: "NORMAL" | "COMFORTABLE" | "COMPACT" | "NONE";
}

export interface Section {
    id: string;
    description: string;
    displayName: string;
    dataElements: SectionDataElement[];
    formFields: OrderedSection;
    greyedFields: GreyedFields[];
    fieldsToRemove: FieldsToRemove[];
}

interface GreyedFields {
    id: string;
    dataElement: Ref;
    categoryOptionCombo: Ref;
}

export interface FieldsToRemove {
    dataElement: string;
    categoryOptionCombo: string;
}

export interface SectionDataElement {
    id: string;
    code: string;
    description?: string;
    formName: string;
    categoryCombo: { id: string; categoryOptionCombos: CategoryOptionCombo[] };
    valueType: string;
}

export interface OrderedSection {
    checkboxes: SectionDataElement[];
    fields: SectionDataElement[];
    globalEntry: SectionDataElement[];
}

export interface CategoryOptionCombo {
    id: string;
    name: string;
}

