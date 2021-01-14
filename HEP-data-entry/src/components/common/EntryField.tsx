import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    dataElementCode: string;
    catComboId: string;
    catComboName: string;
    orgUnitId?: string;
    type?: "radio" | "text";
    disabled?: string | boolean;
    hidden?: string | boolean;
    customAttributes?: any;
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
        hidden = false,
        customAttributes = {},
    } = attributes;

    const id = orgUnitId
        ? `${orgUnitId}-${dataElementId}-${catComboId}`
        : `${dataElementId}-${catComboId}`;

    switch (type) {
        case "text": {
            return (
                <input
                    {...customAttributes}
                    hidden={hidden}
                    id={`${id}-val`}
                    name="entryfield"
                    title={`${dataElementCode} ${catComboName}`}
                    class={"entryfield"}
                    type={type}
                    disabled={disabled}
                />
            );
        }
        case "radio": {
            return [
                <label>
                    <input
                        type="radio"
                        name={`${id}-val`}
                        class="entryselect"
                        id={`${id}-val`}
                        style="background-color: rgb(255, 255, 255); border: 1px solid rgb(170, 170, 170);"
                        value={"true"}
                        disabled={disabled}
                    />
                    Yes
                </label>,
                <label>
                    <input
                        type="radio"
                        name={`${id}-val`}
                        class="entryselect"
                        id={`${id}-val`}
                        style="background-color: rgb(255, 255, 255); border: 1px solid rgb(170, 170, 170);"
                        value={"false"}
                        disabled={disabled}
                    />
                    No
                </label>,
                <img
                    class="commentlink"
                    id={`${id}-comment`}
                    src="../images/comment.png"
                    title="View comment"
                    style="cursor: pointer;"
                />,
            ].join("");
        }
        default: {
            return (
                <input
                    {...customAttributes}
                    hidden={hidden}
                    id={`${id}-val`}
                    name="entryfield"
                    title={`${dataElementCode} ${catComboName}`}
                    class={"entryfield"}
                    type={type}
                    disabled={disabled}
                />
            );
        }
    }
}
