import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    categoryOptionComboId: string;
    checkbox?: boolean;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElementId, categoryOptionComboId } = attributes;
    const id = `${dataElementId}-${categoryOptionComboId}-val`;
    return attributes.checkbox ? (
        <input name="checkbox" class="checkbox" id={id} autocomplete="off" type="checkbox" />
    ) : (
        <input name="entryfield" class="entryfield" id={id} autocomplete="off" />
    );
}
