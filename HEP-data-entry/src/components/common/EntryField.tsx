import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    dataElementCode: string;
    catComboId: string;
    catComboName: string;
    orgUnitId?: string;
    type?: "checkbox" | "radio" | "text";
    disabled?: string | boolean;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const {
        orgUnitId,
        dataElementId,
        dataElementCode,
        catComboId,
        catComboName,
        type = "text",
        disabled = false,
    } = attributes;

    const id = orgUnitId
        ? `${orgUnitId}-${dataElementId}-${catComboId}`
        : `${dataElementId}-${catComboId}`;

    return (
        <input
            id={`${id}-val`}
            name="entryfield"
            title={`${dataElementCode} ${catComboName}`}
            class={"entryfield"}
            type={type}
            disabled={disabled}
        />
    );
}
