import { createElement } from "typed-html";
import { CustomDataElement } from "./dataElementGroups";

export interface TruOnlyEntriesProps {
    containerId: string;
    inputCheckboxes: CustomDataElement[];
}

export function TrueOnlyEntries(attributes: TruOnlyEntriesProps): string {
    const { containerId, inputCheckboxes } = attributes;
    const onClick = `showCheckboxes('${containerId}')`;

    return (
        <div class="multiselect">
            <div class="selectBox" onclick={onClick}>
                <select>
                    <option>Select an option</option>
                </select>
                <div class="overSelect">&nbsp;</div>
            </div>

            <div class="hwf" id={containerId}>
                {inputCheckboxes.map(check => {
                    const checkId = `{{orgUnitId}}-${check.id}`;

                    return (
                        <label class="check">
                            <input id={checkId} type="checkbox" />
                            {check.displayName}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
