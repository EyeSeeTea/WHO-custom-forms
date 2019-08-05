import { DataSet, Ref } from "../Dhis2Metadata";
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

export const valueTypes = {
    checkbox: ["TRUE_ONLY"],
    entryField: ["INTEGER_ZERO_OR_POSITIVE", "PERCENTAGE"],
    globalEntryCode: "GLOBAL_ENTRY",
};

const headerGroupColors: { [key: string]: string } = {
    HBV: "hbv-color",
    HCV: "hcv-color",
};

export class Form {
    public static getOrderedSections(sections: Section[]): Section[] {
        return sections.map(section => ({
            ...section,
            formFields: sortDataElements(section.dataElements),
            fieldsToRemove: section.greyedFields.map(gf => ({
                dataElement: gf.dataElement.id,
                categoryOptionCombo: gf.categoryOptionCombo.id,
            })),
        }));
    }

    public static getFormHtml(dataSet: DataSet): string {
        const sections = this.getOrderedSections(dataSet.sections);
        const formHtml = CustomForm({ sections });
        return formHtml;
    }

    public static getCategoryOptionCombos(
        dataElements: SectionDataElement[]
    ): CategoryOptionCombo[] {
        if (_.isEmpty(dataElements)) {
            throw new Error("No dataElements available");
        }
        return dataElements[0].categoryCombo.categoryOptionCombos;
    }

    public static getCategoryOptionComboColor(cco: CategoryOptionCombo): string {
        return headerGroupColors[cco.name];
    }
}

function sortDataElements(dataElements: SectionDataElement[]): OrderedSection {
    const { globalEntry, fields, checkboxes } = _.groupBy(dataElements, dataElement => {
        if (valueTypes.globalEntryCode === dataElement.code) {
            return "globalEntry";
        } else if (valueTypes.entryField.includes(dataElement.valueType)) {
            return "fields";
        } else {
            return "checkboxes";
        }
    });

    return { globalEntry, fields, checkboxes };
}
