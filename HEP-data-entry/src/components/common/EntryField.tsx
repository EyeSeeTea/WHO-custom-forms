import { createElement } from "typed-html";

interface EntryFieldAttributes {
    dataElementId: string;
    dataElementCode: string;
    catComboId: string;
    catComboName: string;
    orgUnitId?: string;
    type?: "radio" | "text" | "textArea";
    disabled?: string | boolean;
    hidden?: string | boolean;
    customAttributes?: any;
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const {
        orgUnitId,
        dataElementId,
        catComboId,
        type = "text",
        disabled = false,
        hidden = false,
        customAttributes = {},
    } = attributes;

    const id = orgUnitId
        ? `${orgUnitId}-${dataElementId}-${catComboId}`
        : `${dataElementId}-${catComboId}`;

    switch (type) {
        case "radio": {
            return [
                <label>
                    <input
                        type="radio"
                        name={`${id}-val`}
                        class="entryselect"
                        id={`${id}-val`}
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
                        value={"false"}
                        disabled={disabled}
                    />
                    No
                </label>,
                // <img
                //     class="commentlink"
                //     id={`${id}-comment`}
                //     src="../images/comment.png"
                //     title="View comment"
                //     style="cursor: pointer;"
                // />,
            ].join("");
        }
        case "textArea": {
            return (
                <textarea
                    {...customAttributes}
                    hidden={hidden}
                    id={`${id}-val`}
                    name={!orgUnitId ? "entryfield" : ""}
                    //title={`${dataElementCode} ${catComboName}`}
                    class={!orgUnitId ? "entryfield" : ""}
                    disabled={disabled}
                />
            );
        }
        default: {
            return (
                <input
                    {...customAttributes}
                    hidden={hidden}
                    id={`${id}-val`}
                    name={!orgUnitId ? "entryfield" : ""}
                    //title={`${dataElementCode} ${catComboName}`}
                    class={!orgUnitId ? "entryfield" : ""}
                    type={type}
                    disabled={disabled}
                    style={"text-align: center;"}
                />
            );
        }
    }
}
