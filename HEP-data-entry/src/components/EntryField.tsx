import { createElement } from "typed-html";
import { SectionDataElement } from "../models/Form";

interface EntryFieldAttributes {
    dataElement: SectionDataElement;
    categoryOptionComboId: string;
    sectionId: string;
    checkbox?: boolean;
    type?: "checkbox" | "radio";
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElement, categoryOptionComboId, sectionId } = attributes;
    return (
        <div>
            <input
                name={`entry-${sectionId}-${categoryOptionComboId}`}
                class={`entrytrueonly ${attributes.type}`}
                id={`${dataElement.id}-${categoryOptionComboId}-val`}
                autocomplete="off"
                type={attributes.type || ""}
            />
            <i class="fas fa-info-circle help-icon" title={`${dataElement.formName}`}></i>
        </div>
    );
}
