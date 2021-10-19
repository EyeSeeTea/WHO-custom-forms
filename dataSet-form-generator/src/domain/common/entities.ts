export interface Ref {
    id: string;
}

interface DataSetElement {
    dataElement: Ref;
    dataSet: Ref;
    categoryCombo?: Ref;
}

export interface DataSet {
    id: string;
    name: string;
    dataEntryForm?: Ref;
    dataSetElements: DataSetElement[];
    sections: Section[];
}

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
    categoryOptions: CategoryOption[];
}

export interface CategoryOption {
    id: string;
    code: string;
}

export interface NameRef {
    id: string;
    name: string;
}
