import { createElement } from "typed-html";
import { CustomMetadata } from "./CustomMetadata";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    catOptionComboId: string;
    catOptionComboName: string;
}

export function CatOptionComboHeaderCell(attributes: EntryFieldAttributes): string {
    const { customMetadata, catOptionComboId, catOptionComboName } = attributes;

    const catComboData = customMetadata.optionCombos[catOptionComboId];

    return (
        <th scope="col" style="text-align: center;padding: 2px;white-space: nowrap;">
            {catComboData && catComboData.name ? catComboData.name : catOptionComboName}
        </th>
    );
}
