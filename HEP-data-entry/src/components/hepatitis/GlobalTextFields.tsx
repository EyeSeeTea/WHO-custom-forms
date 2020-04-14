import { createElement } from "typed-html";
import * as _ from "lodash";
import { CategoryOptionCombo, SectionDataElement } from "../../models/d2Models";

interface GlobalTextFieldAttributes {
    dataElements: SectionDataElement[];
    categoryOptionCombos: CategoryOptionCombo[];
}

export function GlobalTextFields(attributes: GlobalTextFieldAttributes): string {
    const { dataElements, categoryOptionCombos } = attributes;
    const fields = _.flatMap(dataElements, de =>
        categoryOptionCombos.map((coc, i) => [
            <div class="global-entry-title">
                <span
                    id={`${de.id}-global-dataElements-${i}`}
                >{`${de.formName} for the whole ${coc.name} cascade`}</span>
            </div>,
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
