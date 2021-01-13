import { createElement } from "typed-html";
import { SectionDataElement } from "../../domain/common/entities";
import { AntivenomEntriesGroupData } from "../../domain/snakebite/AntivenomEntries";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { EntryField } from "../common/EntryField";

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

    return (
        <div>
            <h4>
                {group.title}
                {group.info ? (
                    <i
                        class="fa fa-info-circle"
                        style="font-size:16px;color:#276696;"
                        title={`${group.info}`}
                    >
                        :
                    </i>
                ) : (
                    ":"
                )}
            </h4>

            <table {...tableAttributes} class="sectionTable">
                <thead>
                    <tr>
                        {group.dataElements.map(antivenomDE => {
                            const dataElementData = customMetadata.dataElements[antivenomDE.id];
                            const de = dataElements.find(
                                sectionDE => sectionDE.id === antivenomDE.id
                            );

                            if (!de) {
                                throw Error(
                                    `The data element '${antivenomDE.id}' assigned in antivenom entries does not exist in the section of the data set'`
                                );
                            }

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
                            const de = dataElements.find(
                                sectionDE => sectionDE.id === antivenomDE.id
                            );

                            if (!de) {
                                throw Error(
                                    `The data element '${antivenomDE.id}' assigned in antivenom entries does not exist in the section of the data set'`
                                );
                            }

                            return (
                                <td>
                                    <EntryField
                                        dataElementId={antivenomDE.id}
                                        dataElementCode={de.code}
                                        catComboId={de.categoryCombo.categoryOptionCombos[0].id}
                                        catComboName={de.categoryCombo.categoryOptionCombos[0].name}
                                        type={de.valueType === "BOOLEAN" ? "checkbox" : "text"}
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
