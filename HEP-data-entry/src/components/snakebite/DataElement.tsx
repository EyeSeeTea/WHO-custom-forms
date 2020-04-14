import { createElement } from "typed-html";
import { SectionDataElement } from "../../models/d2Models";

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

    return (
        <div>
            <h4>{dataElement.formName}:</h4>

            <table {...tableAttributes} class="sectionTable" style="border-collapse:collapse;">
                <thead>
                    <tr>
                        <th scope="row">Total</th>
                        {dataElement.categoryCombo.categoryOptionCombos.map(catCombo => {
                            return <th scope="col">{catCombo.name}</th>;
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

                        {dataElement.categoryCombo.categoryOptionCombos.map(catCombo => {
                            return (
                                <td style="text-align: center;">
                                    <input
                                        id={`${dataElement.id}-${catCombo.id}-val`}
                                        name="entryfield"
                                        title={`${dataElement.code} ${catCombo.name}`}
                                        value={`[ ${dataElement.code} ${catCombo.name} ]`}
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
