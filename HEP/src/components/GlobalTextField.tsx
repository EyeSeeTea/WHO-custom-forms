import { createElement } from "typed-html";
import { SectionDataElement } from "../models/Form";

interface GlobalTextFieldAttributes {
    dataElement: SectionDataElement;
}

export function GlobalTextField(attributes: GlobalTextFieldAttributes): string {
    const { dataElement } = attributes;
    const id = `${dataElement.id}-FALTAELCATEGORYOPTIONCOMBOID-val`;
    return (
        <div class="global-entry-area">
            <div class="global-entry-title">{`${dataElement.shortName} for ${dataElement.categoryCombo.categoryOptionCombos[0].name}`}</div>
            <textarea
                id={id}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>
            <div class="global-entry-title">{`${dataElement.shortName} for ${dataElement.categoryCombo.categoryOptionCombos[1].name}`}</div>
            <textarea
                id={id}
                name="entryfield"
                class="entryfield entryarea custom-text-area"
                placeholder="Add your comment here"
            ></textarea>
        </div>
    );
}
/*
<textarea id="AIUHrI7cFq2-sFwZ0glc9I7-val" name="entryfield" title="" value="" class="entryfield entryarea" tabindex="47" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(170, 170, 170);"></textarea>

*/
