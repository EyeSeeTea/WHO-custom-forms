import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    categoryOptionComboId: string;
    sectionId: string;
    checkbox?: boolean;
    type?: "checkbox" | "radio"
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElementId, categoryOptionComboId, sectionId } = attributes;
    return (
        <input
            name={`entry-${sectionId}-${categoryOptionComboId}`}
            class={`entrytrueonly ${attributes.type}`}
            id={`${dataElementId}-${categoryOptionComboId}-val`}
            autocomplete="off"
            type={attributes.type || ""}
        />
    );
}
