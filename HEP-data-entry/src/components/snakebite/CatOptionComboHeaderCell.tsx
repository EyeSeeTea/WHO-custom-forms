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

    return <th>{catComboData && catComboData.name ? catComboData.name : catOptionComboName}</th>;
}
