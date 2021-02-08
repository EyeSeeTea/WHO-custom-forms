import { createElement } from "typed-html";
import { SectionDataElement } from "../../domain/common/entities";
import { CatOptionComboHeaderCell } from "./CatOptionComboHeaderCell";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { sortCategoryOptionCombos } from "./utils";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    dataElement: SectionDataElement;
}

export function CatOptionCombosHeaderCells(attributes: EntryFieldAttributes): string {
    const { customMetadata, dataElement } = attributes;

    const customMetadataDE = customMetadata.dataElements[dataElement.id];

    const categoryOptionCombos = sortCategoryOptionCombos(dataElement, customMetadata);

    const backgroundColor =
        customMetadataDE && customMetadataDE.backgroundColor
            ? `background-color:${customMetadataDE.backgroundColor};`
            : "";
    const color =
        customMetadataDE && customMetadataDE.color ? `color:${customMetadataDE.color};` : "";

    const totalHeader =
        customMetadataDE === undefined ||
        customMetadataDE.showTotal === undefined ||
        customMetadataDE.showTotal === true ? (
            <th style={backgroundColor + color}>
                {customMetadataDE && customMetadataDE.totalName
                    ? customMetadataDE.totalName
                    : "Total"}
            </th>
        ) : (
            ""
        );

    return [
        totalHeader,
        ...categoryOptionCombos.map(catCombo => {
            const catComboData = customMetadata.optionCombos[catCombo.id];

            const helpMessage = catComboData && catComboData.info ? catComboData.info : undefined;
            return (
                <CatOptionComboHeaderCell
                    customMetadata={customMetadata}
                    catOptionComboId={catCombo.id}
                    catOptionComboName={catCombo.name}
                    helpMessage={helpMessage}
                    backgroundColorByDE={backgroundColor}
                    colorByDE={color}
                />
            );
        }),
    ].join("");
}
