import { DataSet } from "../Dhis2Metadata";
import { CustomForm } from "../components/CustomForm";
import * as _ from "lodash";

export interface DataEntryForm {
    id: string;
    name: string;
    htmlCode: string;
    style: "NORMAL" | "COMFORTABLE" | "COMPACT" | "NONE";
}

export interface Section {
    id: string;
    displayName: string;
    dataElements: SectionDataElement[];
    formFields: OrderedSection;
}

export interface SectionDataElement {
    id: string;
    shortName: string;
    categoryCombo: { id: string };
    valueType: string;
}

export interface OrderedSection {
    checkboxes: SectionDataElement[];
    fields: SectionDataElement[];
}

export const valueTypes = {
    checkbox: "TRUE_ONLY",
    entryField: ["INTEGER_ZERO_OR_POSITIVE", "PERCENTAGE"],
};

export class Form {
    public static getOrderedSections(sections: Section[]): Section[] {
        return sections.map(section => ({
            ...section,
            formFields: orderDataElements(section.dataElements),
        }));
    }

    public static getFormHtml(dataSet: DataSet): string {
        const sections = this.getOrderedSections(dataSet.sections);
        const formHtml = CustomForm({ sections });
        return formHtml;
    }
}

function orderDataElements(dataElements: SectionDataElement[]) {
    return _.reduce(
        dataElements,
        (
            acc: { checkboxes: SectionDataElement[]; fields: SectionDataElement[] },
            dataElement: SectionDataElement
        ) => {
            if (valueTypes.entryField.includes(dataElement.valueType)) {
                const fields = [...acc.fields, dataElement];
                return { ...acc, fields };
            } else {
                const checkboxes = [...acc.checkboxes, dataElement];
                return { ...acc, checkboxes };
            }
        },
        { checkboxes: [], fields: [] }
    );
}
