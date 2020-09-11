import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: String;
    dataElementCode: String;
    catComboId: String;
    catComboName: String;
    helpMessage?: String;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElementId, dataElementCode, catComboId, catComboName, helpMessage } = attributes;

    return (
        <div>
            <input
                id={`${dataElementId}-${catComboId}-val`}
                name="entryfield"
                title={`${dataElementCode} ${catComboName}`}
                value={`[ ${dataElementCode} ${catComboName} ]`}
            />
            {helpMessage && (
                <i
                    class="fa fa-info-circle"
                    style="font-size:16px;color:#276696;"
                    id={`${dataElementId}-${catComboName}-field-description`}
                    title={`${helpMessage}`}
                >
                    &nbsp;
                </i>
            )}
        </div>
    );
}
