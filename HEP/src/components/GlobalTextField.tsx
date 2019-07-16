import { createElement } from "typed-html";
import { SectionDataElement } from "../models/Form";

interface GlobalTextFieldAttributes {
    dataElement: SectionDataElement;
}

export function GlobalTextField(attributes: GlobalTextFieldAttributes): string {
    const { dataElement } = attributes;
    return (
        <div class="global-entry-area">
            <div class="global-entry-title">{`${dataElement.formName} for ${dataElement.categoryCombo.categoryOptionCombos[0].name}`}</div>
            <textarea
                id={`${dataElement.id}-${dataElement.categoryCombo.categoryOptionCombos[0].id}-val`}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>
            <div class="global-entry-title">{`${dataElement.formName} for ${dataElement.categoryCombo.categoryOptionCombos[1].name}`}</div>
            <textarea
                id={`${dataElement.id}-${dataElement.categoryCombo.categoryOptionCombos[1].id}-val`}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>
        </div>
    );
}
