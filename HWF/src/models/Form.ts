import { ProgramStage } from "../Dhis2Metadata";
import { CustomForm } from "../components/CustomForm";
import * as _ from "lodash";

export interface DataEntryForm {
    id: string;
    name: string;
    htmlCode: string;
    style: "NORMAL" | "COMFORTABLE" | "COMPACT" | "NONE";
}

export interface CategoryOptionCombo {
    id: string;
    name: string;
}

export class Form {
    public static getFormHtml(programStage: ProgramStage): string {
        //const sections = this.getOrderedSections(dataSet.sections);
        const formHtml = CustomForm({ programStage });
        return formHtml;
    }
}

/*
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
*/
