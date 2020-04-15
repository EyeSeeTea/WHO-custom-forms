import { createElement } from "typed-html";
import { SectionDataElement } from "../../models/d2Models";
import { EntryField } from "../common/EntryField";
import _ = require("lodash");

interface DataElementAttributes {
    dataElement: SectionDataElement;
}

export function DataElement(attributes: DataElementAttributes): string {
    const { dataElement } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
        cellpadding: "5",
        cellspacing: "0",
    };

    const categoryOptionCombos = _.sortBy(
        dataElement.categoryCombo.categoryOptionCombos.map(catOpCombo => {
            const CatOptionCode = catOpCombo.categoryOptions
                ? catOpCombo.categoryOptions[0].code.split("_").reverse()[0]
                : "";

            const order = parseInt(CatOptionCode);

            return {
                id: catOpCombo.id,
                name: catOpCombo.name,
                order: Number.isNaN(order) ? 0 : order,
            };
        }),
        ["order"]
    );

    return (
        <div>
            <h4>{dataElement.formName}:</h4>

            <table {...tableAttributes} class="sectionTable" style="border-collapse:collapse;">
                <thead>
                    <tr>
                        <th scope="row" style="text-align: center;">
                            Total
                        </th>
                        {categoryOptionCombos.map(catCombo => {
                            return (
                                <th scope="col" style="text-align: center;">
                                    {catCombo.name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <input
                                {...{ dataelementid: dataElement.id }}
                                id={`total${dataElement.id}`}
                                name="total"
                                readonly="readonly"
                                title={`${dataElement.code}`}
                                value={`[ ${dataElement.code} ]`}
                            />
                        </th>

                        {categoryOptionCombos.map(catCombo => {
                            return (
                                <td style="text-align: center;">
                                    <EntryField
                                        dataElementId={dataElement.id}
                                        dataElementCode={dataElement.code}
                                        catComboId={catCombo.id}
                                        catComboName={catCombo.name}
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
