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

    const dataElementAtt = { dataelementid: dataElement.id };
    const orgUnitDataElementAtt = orgUnitId
        ? { subnationaltotalid: `${orgUnitId}-${dataElement.id}` }
        : undefined;

    return [
        <td>
            <input
                {...(orgUnitDataElementAtt ? orgUnitDataElementAtt : dataElementAtt)}
                id={`total${dataElement.id}`}
                name={orgUnitDataElementAtt ? "subnationalTotal" : "total"}
                readonly="readonly"
                title={`${dataElement.code}`}
                class={"entryfield"}
                type={"text"}
            />
        </td>,
        ...categoryOptionCombos.map(catCombo => {
            const catComboData = customMetadata.optionCombos[catCombo.id];

            const helpMessage = catComboData && catComboData.info ? catComboData.info : undefined;

            return (
                <td>
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