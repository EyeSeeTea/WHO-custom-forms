import { createElement } from "typed-html";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    catOptionComboId: string;
    catOptionComboName: string;
    helpMessage?: string;
    backgroundColorByDE?: string;
    colorByDE?: string;
}

export function CatOptionComboHeaderCell(attributes: EntryFieldAttributes): string {
    const {
        customMetadata,
        catOptionComboId,
        catOptionComboName,
        helpMessage,
        backgroundColorByDE = "",
        colorByDE = "",
    } = attributes;

    const catComboData = customMetadata.optionCombos[catOptionComboId];

    const backgroundColor =
        catComboData && catComboData.backgroundColor
            ? `background-color:${catComboData.backgroundColor};`
            : backgroundColorByDE;
    const color = catComboData && catComboData.color ? `color:${catComboData.color};` : colorByDE;

    return (
        <th style={backgroundColor + color}>
            <span>
                {catComboData && catComboData.name ? catComboData.name : catOptionComboName}&nbsp;
            </span>
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
