import { createElement } from "typed-html";
import { CustomMetadata } from "./CustomMetadata";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    catOptionComboId: string;
    catOptionComboName: string;
    helpMessage?: string;
}

export function CatOptionComboHeaderCell(attributes: EntryFieldAttributes): string {
    const { customMetadata, catOptionComboId, catOptionComboName, helpMessage } = attributes;

    const catComboData = customMetadata.optionCombos[catOptionComboId];

    return (
        <th>
            <span>
                {catComboData && catComboData.name ? catComboData.name : catOptionComboName}&nbsp;
            </span>
            {helpMessage && (
                <i
                    class="fa fa-info-circle"
                    style="font-size:16px;color:#276696;"
                    id={`${catOptionComboId}-field-description`}
                    title={`${helpMessage}`}
                ></i>
            )}
        </th>
    );
}
