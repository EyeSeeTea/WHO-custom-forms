import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    dataElementCode: string;
    catComboId: string;
    catComboName: string;
    helpMessage?: string;
    orgUnitId?: string;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const {
        orgUnitId,
        dataElementId,
        dataElementCode,
        catComboId,
        catComboName,
        helpMessage,
    } = attributes;

    const id = orgUnitId
        ? `${orgUnitId}-${dataElementId}-${catComboId}`
        : `${dataElementId}-${catComboId}`;

    return (
        <div>
            <input
                id={`${id}-val`}
                name="entryfield"
                title={`${dataElementCode} ${catComboName}`}
                class={"entryfield"}
                type={"text"}
            />
            {helpMessage && (
                <i
                    class="fa fa-info-circle"
                    style="font-size:16px;color:#276696;"
                    id={`${id}-field-description`}
                    title={`${helpMessage}`}
                >
                    &nbsp;
                </i>
            )}
        </div>
    );
}
