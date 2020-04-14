import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: String;
    dataElementCode: String;
    catComboId: String;
    catComboName: String;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElementId, dataElementCode, catComboId, catComboName } = attributes;

    return (
        <input
            id={`${dataElementId}-${catComboId}-val`}
            name="entryfield"
            title={`${dataElementCode} ${catComboName}`}
            value={`[ ${dataElementCode} ${catComboName} ]`}
        />
    );
}
