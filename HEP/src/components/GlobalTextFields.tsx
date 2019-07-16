import { createElement } from "typed-html";
import { SectionDataElement, CategoryOptionCombo } from "../models/Form";

interface GlobalTextFieldAttributes {
    dataElements: SectionDataElement[];
    categoryOptionCombos: CategoryOptionCombo[];
}

export function GlobalTextFields(attributes: GlobalTextFieldAttributes): string {
    const { dataElements, categoryOptionCombos } = attributes;
    const fields = dataElements.map(de =>
        categoryOptionCombos.map(coc => [
            <div class="global-entry-title">{`${de.formName} for ${coc.name}`}</div>,
            <textarea
                id={`${de.id}-${coc.id}-val`}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>,
        ])
    );
    return <div class="global-entry-area">{fields}</div>;
}
