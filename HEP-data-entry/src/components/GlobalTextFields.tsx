import { createElement } from "typed-html";
import * as _ from "lodash";
import { getDataElementTranslation } from "../utils";
import { SectionDataElement, CategoryOptionCombo } from "../models/Form";

interface GlobalTextFieldAttributes {
    dataElements: SectionDataElement[];
    categoryOptionCombos: CategoryOptionCombo[];
    userLocale: string;
}

export function GlobalTextFields(attributes: GlobalTextFieldAttributes): string {
    const { dataElements, categoryOptionCombos, userLocale } = attributes;
    const fields = _.flatMap(dataElements, de => {
        const dataElementTranslation = getDataElementTranslation(de, userLocale, "FORM_NAME");
        return categoryOptionCombos.map(coc => [
            <div class="global-entry-title">{`${dataElementTranslation} for the whole ${coc.name} cascade`}</div>,
            <textarea
                id={`${de.id}-${coc.id}-val`}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>,
        ]);
    });
    return <div class="global-entry-area">{_.flatten(fields)}</div>;
}
