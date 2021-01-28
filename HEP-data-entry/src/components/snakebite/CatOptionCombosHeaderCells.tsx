import { createElement } from "typed-html";
import { SectionDataElement } from "../../models/d2Models";
import { CatOptionComboHeaderCell } from "./CatOptionComboHeaderCell";
import { CustomMetadata } from "./CustomMetadata";
import { sortCategoryOptionCombos } from "./utils";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    dataElement: SectionDataElement;
}

export function CatOptionCombosHeaderCells(attributes: EntryFieldAttributes): string {
    const { customMetadata, dataElement } = attributes;

    const customMetadataDE = customMetadata.dataElements[dataElement.id];

    const categoryOptionCombos = sortCategoryOptionCombos(dataElement, customMetadata);

    return [
        <th>
            {customMetadataDE && customMetadataDE.totalName ? customMetadataDE.totalName : "Total"}
        </th>,
        ...categoryOptionCombos.map(catCombo => {
            const catComboData = customMetadata.optionCombos[catCombo.id];

            const helpMessage = catComboData && catComboData.info ? catComboData.info : undefined;
            return (
                <CatOptionComboHeaderCell
                    customMetadata={customMetadata}
                    catOptionComboId={catCombo.id}
                    catOptionComboName={catCombo.name}
                    helpMessage={helpMessage}
                />
            );
        }),
    ].join("");
}
