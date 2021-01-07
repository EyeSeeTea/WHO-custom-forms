import { createElement } from "typed-html";
import { SectionDataElement } from "../../models/d2Models";
import { EntryField } from "../common/EntryField";
import _ = require("lodash");
import { CustomMetadata } from "./CustomMetadata";
import { CatOptionCombosHeaderCells } from "./CatOptionCombosHeaderCells";

interface DataElementAttributes {
    customMetadata: CustomMetadata;
    dataElement: SectionDataElement;
}

export function DataElement(attributes: DataElementAttributes): string {
    const { dataElement, customMetadata } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
        cellpadding: "5",
        cellspacing: "0",
    };

    const categoryOptionCombos = _.sortBy(
        dataElement.categoryCombo.categoryOptionCombos.map(catOpCombo => {
            const catComboData = customMetadata.optionCombos[catOpCombo.id];

            const order = catComboData ? catComboData.order : 0;

            return {
                id: catOpCombo.id,
                name: catOpCombo.name,
                order: order,
            };
        }),
        ["order"]
    );

    const dataElementData = customMetadata.dataElements[dataElement.id];

    return (
        <div>
            <h4>
                {dataElement.formName}
                {dataElementData && dataElementData.info ? (
                    <i
                        class="fa fa-info-circle"
                        style="font-size:16px;color:#276696;"
                        title={`${dataElementData.info}`}
                    >
                        :
                    </i>
                ) : (
                    ":"
                )}
            </h4>

            <table {...tableAttributes} class="sectionTable" style="border-collapse:collapse;">
                <thead>
                    <tr>
                        <CatOptionCombosHeaderCells
                            customMetadata={customMetadata}
                            dataElement={dataElement}
                        />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" style="text-align: center;padding: 12px;">
                            <input
                                {...{ dataelementid: dataElement.id }}
                                id={`total${dataElement.id}`}
                                name="total"
                                readonly="readonly"
                                title={`${dataElement.code}`}
                                value={`[ ${dataElement.code} ]`}
                                class={"entryfield"}
                                type={"text"}
                                style="width:80%;"
                            />
                        </th>

                        {categoryOptionCombos.map(catCombo => {
                            const catComboData = customMetadata.optionCombos[catCombo.id];

                            const helpMessage =
                                catComboData && catComboData.info ? catComboData.info : undefined;

                            return (
                                <td style="text-align: center;padding: 12px;">
                                    <EntryField
                                        dataElementId={dataElement.id}
                                        dataElementCode={dataElement.code}
                                        catComboId={catCombo.id}
                                        catComboName={catCombo.name}
                                        helpMessage={helpMessage}
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
