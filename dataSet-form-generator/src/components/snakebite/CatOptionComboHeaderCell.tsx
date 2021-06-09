import { createElement } from "typed-html";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";

const defaultCatOptionComboId = "Xr12mI7VPn3";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    catOptionComboId: string;
    catOptionComboName: string;
    dataElementId: string;
    helpMessage?: string;
    backgroundColorByDE?: string;
    colorByDE?: string;
}

export function CatOptionComboHeaderCell(attributes: EntryFieldAttributes): string {
    const {
        customMetadata,
        catOptionComboId,
        catOptionComboName,
        dataElementId,
        helpMessage,
        backgroundColorByDE = "",
        colorByDE = "",
    } = attributes;

    const dataElementData = customMetadata.dataElements[dataElementId];
    const catComboData = customMetadata.optionCombos[catOptionComboId];

    const backgroundColor =
        catComboData && catComboData.backgroundColor
            ? `background-color:${catComboData.backgroundColor};`
            : backgroundColorByDE;
    const color = catComboData && catComboData.color ? `color:${catComboData.color};` : colorByDE;

    const nameByDataElement =
        catOptionComboId === defaultCatOptionComboId &&
        dataElementData &&
        dataElementData.defaultCatOptionComboName
            ? dataElementData.defaultCatOptionComboName
            : undefined;

    const nameByCatOptionCombo =
        catComboData && catComboData.name ? catComboData.name : catOptionComboName;

    return (
        <th style={backgroundColor + color}>
            <span>{nameByDataElement ? nameByDataElement : nameByCatOptionCombo}&nbsp;</span>
            {helpMessage && (
                <i
                    class="fa fa-info-circle"
                    style={"font-size:16px;" + backgroundColor + color}
                    id={`${catOptionComboId}-field-description`}
                    title={`${helpMessage}`}
                ></i>
            )}
        </th>
    );
}
