import { createElement } from "typed-html";
import { SectionDataElement } from "../../domain/common/entities";
import { AntivenomEntriesGroupData } from "../../domain/snakebite/AntivenomEntries";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { EntryField } from "../common/EntryField";
import { TableTitle } from "./TableTitle";

interface AntivenomEntriesGroupAttributes {
    group: AntivenomEntriesGroupData;
    customMetadata: CustomMetadata;
    dataElements: SectionDataElement[];
}

export function AntivenomEntriesGroup(attributes: AntivenomEntriesGroupAttributes): string {
    const { group, customMetadata, dataElements } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
        cellpadding: "5",
        cellspacing: "0",
    };

    const getSectionDataElement = (id: string) => {
        const de = dataElements.find(sectionDE => sectionDE.id === id);

        if (de) {
            return de;
        } else {
            throw Error(
                `The data element '${id}' assigned in antivenom entries does not exist in the section of the data set'`
            );
        }
    };

    return (
        <div>
            <TableTitle title={group.title} info={group.info} />

            <table {...tableAttributes} class="sectionTable">
                <thead>
                    <tr>
                        {group.dataElements.map(antivenomDE => {
                            const dataElementData = customMetadata.dataElements[antivenomDE.id];
                            const de = getSectionDataElement(antivenomDE.id);

                            return (
                                <th>
                                    <span>
                                        {dataElementData && dataElementData.name
                                            ? dataElementData.name
                                            : de.formName}
                                        &nbsp;
                                    </span>
                                    {dataElementData && dataElementData.info && (
                                        <i
                                            class="fa fa-info-circle"
                                            style="font-size:16px;color:#276696;"
                                            id={`${antivenomDE.id}-field-description`}
                                            title={`${dataElementData.info}`}
                                        ></i>
                                    )}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {group.dataElements.map(antivenomDE => {
                            const de = getSectionDataElement(antivenomDE.id);
                            const customAttributes = antivenomDE.prop
                                ? {
                                      dataProp: antivenomDE.prop,
                                      dataType: de.valueType === "BOOLEAN" ? "radio" : "text",
                                  }
                                : {};

                            return (
                                <td {...customAttributes} class="antivenom-product-td">
                                    {antivenomDE.recommendedProductsSelector !== undefined ? (
                                        <input
                                            id={`${antivenomDE.id}-sel`}
                                            hidden
                                            class={
                                                antivenomDE.recommendedProductsSelector === true
                                                    ? "antivenom-products antivenom-recommended-products"
                                                    : "antivenom-products antivenom-non-recommended-products"
                                            }
                                            data-recommended={
                                                antivenomDE.recommendedProductsSelector
                                            }
                                        />
                                    ) : (
                                        ""
                                    )}
                                    <EntryField
                                        dataElementId={antivenomDE.id}
                                        dataElementCode={de.code}
                                        catComboId={""}
                                        catComboName={de.categoryCombo.categoryOptionCombos[0].name}
                                        type={de.valueType === "BOOLEAN" ? "radio" : "text"}
                                        disabled={antivenomDE.disabled}
                                        hidden={
                                            antivenomDE.recommendedProductsSelector !== undefined
                                        }
                                    />
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
