import { createElement } from "typed-html";
import * as _ from "lodash";
import { SectionDataElement, CategoryOptionCombo } from "../models/Form";

interface GlobalTextFieldAttributes {
    dataElements: SectionDataElement[];
    categoryOptionCombos: CategoryOptionCombo[];
}

export function GlobalTextFields(attributes: GlobalTextFieldAttributes): string {
    const { dataElements, categoryOptionCombos } = attributes;
    const fields = _.flatMap(dataElements, de =>
        categoryOptionCombos.map(coc => [
            <div class="global-entry-title">{`${de.formName} for the ${coc.name} cascade`}</div>,
            <textarea
                id={`${de.id}-${coc.id}-val`}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>,
        ])
    );
    return <div class="global-entry-area">{_.flatten(fields)}</div>;
}
