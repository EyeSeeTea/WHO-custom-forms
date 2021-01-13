import { createElement } from "typed-html";
import { SectionDataElement } from "../../domain/common/entities";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { EntryField } from "../common/EntryField";
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
            return (
                <td>
                    <EntryField
                        orgUnitId={orgUnitId}
                        dataElementId={dataElement.id}
                        dataElementCode={dataElement.code}
                        catComboId={catCombo.id}
                        catComboName={catCombo.name}
                    />
                </td>
            );
        }),
    ].join("");
}
