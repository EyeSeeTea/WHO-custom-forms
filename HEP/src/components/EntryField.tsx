import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    categoryOptionComboId: string;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElementId, categoryOptionComboId } = attributes;
    const id = `${dataElementId}-${categoryOptionComboId}-val`;

    return (
        <input
            name="entryfield"
            class="entryfield"
            id={id}
            autocomplete="off"
        />
    );
}
