import { createElement } from "typed-html";
import { SectionDataElement } from "../../models/d2Models";
import { EntryField } from "../common/EntryField";
import { CustomMetadata } from "./CustomMetadata";
import { sortCategoryOptionCombos } from "./utils";

interface EntryFieldAttributes {
    customMetadata: CustomMetadata;
    dataElement: SectionDataElement;
    orgUnitId?: string;
}

export function CatOptionCombosDataCells(attributes: EntryFieldAttributes): string {
    const { customMetadata, dataElement, orgUnitId } = attributes;

    const categoryOptionCombos = sortCategoryOptionCombos(dataElement, customMetadata);

    //  const dataelementidAtt = orgUnitId ? `${orgUnitId}-${dataElement.id}` : dataElement.id;

    return [
        <th scope="row" style="text-align: center;padding: 12px;">
            <input
                {...{ dataelementid: dataElement.id }}
                id={`total${dataElement.id}`}
                name="total"
                readonly="readonly"
                title={`${dataElement.code}`}
                class={"entryfield"}
                type={"text"}
                style="width:80%;"
                disabled
            />
        </th>,
        ...categoryOptionCombos.map(catCombo => {
            const catComboData = customMetadata.optionCombos[catCombo.id];

            const helpMessage = catComboData && catComboData.info ? catComboData.info : undefined;

            return (
                <td style="text-align: center;padding: 12px;">
                    <EntryField
                        orgUnitId={orgUnitId}
                        dataElementId={dataElement.id}
                        dataElementCode={dataElement.code}
                        catComboId={catCombo.id}
                        catComboName={catCombo.name}
                        helpMessage={helpMessage}
                    />
                </td>
            );
        }),
    ].join("");
}
