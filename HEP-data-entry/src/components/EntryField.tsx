import { createElement } from "typed-html";
import { SectionDataElement } from "../models/Form";

interface EntryFieldAttributes {
    dataElement: SectionDataElement;
    categoryOptionComboId: string;
    checkbox?: boolean;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElement, categoryOptionComboId } = attributes;
    const id = `${dataElement.id}-${categoryOptionComboId}-val`;
    return attributes.checkbox ? (
        <input
            name="entrytrueonly"
            class="entrytrueonly checkbox"
            id={id}
            autocomplete="off"
            type="checkbox"
        />
    ) : (
        <div>
            <input name="entryfield" class="entryfield" id={id} autocomplete="off" />
            <i class="fas fa-info-circle help-icon" title={`${dataElement.formName}`}></i>
        </div>
    );
}
