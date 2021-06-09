import { CustomForm } from "../CustomForm";
import * as _ from "lodash";
import {
    Section,
    SectionDataElement,
    CategoryOptionCombo,
    OrderedSection,
    DataSet,
} from "../../../domain/common/entities";

export interface HelpTexts {
    [key: string]: string;
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

    public static getHelpMessagesForDataElement(dataElement: SectionDataElement): HelpTexts {
        if (!dataElement.description) {
            return {};
        }
        return JSON.parse(dataElement.description);
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
