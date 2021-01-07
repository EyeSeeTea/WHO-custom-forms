import { createElement } from "typed-html";
import { Section } from "../../models/d2Models";
import { CatOptionCombosDataCells } from "./CatOptionCombosDataCells";
import { CatOptionCombosHeaderCells } from "./CatOptionCombosHeaderCells";
import { CustomMetadata } from "./CustomMetadata";

interface SubnationalSectionsAttributes {
    customMetadata: CustomMetadata;
    sections: Section[];
}

export function SubnationalSections(attributes: SubnationalSectionsAttributes): string {
    const { sections, customMetadata } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
    };

    const html = (
        <div>
            <script src="https://unpkg.com/mustache@4.0.1"></script>
            <script id="orgUnitsTable_template" type="x-tmpl-mustache">
                <table {...tableAttributes} class="sectionTable">
                    <thead>
                        <tr>
                            <th rowspan="2">Org unit</th>
                            {sections &&
                                sections
                                    .map(section => {
                                        return section.dataElements
                                            .map(dataElement => {
                                                const colspan =
                                                    dataElement.categoryCombo.categoryOptionCombos
                                                        .length + 1;
                                                return (
                                                    <th colspan={colspan}>
                                                        {section.displayName +
                                                            "-" +
                                                            dataElement.formName}
                                                    </th>
                                                );
                                            })
                                            .join("");
                                    })
                                    .join("")}
                        </tr>
                        <tr>
                            {sections &&
                                sections
                                    .map(section => {
                                        return section.dataElements
                                            .map(dataElement => {
                                                return (
                                                    <CatOptionCombosHeaderCells
                                                        customMetadata={customMetadata}
                                                        dataElement={dataElement}
                                                    />
                                                );
                                            })
                                            .join("");
                                    })
                                    .join("")}
                        </tr>
                    </thead>
                    <tbody>
                        {"{{#rows}}"}
                        <tr>
                            <th>{"{{orgUnitName}}"}</th>
                            {sections &&
                                sections
                                    .map(section => {
                                        return section.dataElements
                                            .map(dataElement => {
                                                return (
                                                    <CatOptionCombosDataCells
                                                        customMetadata={customMetadata}
                                                        dataElement={dataElement}
                                                        orgUnitId={"{{orgUnitId}}"}
                                                    />
                                                );
                                            })
                                            .join("");
                                    })
                                    .join("")}
                        </tr>
                        {"{{/rows}}"}
                    </tbody>
                </table>
            </script>
            <div id="subnational">
                <div id="orgUnitsTable" class="cde"></div>
                <div id="custom-form-loader">
                    <img id="loader" src="../images/ajax-loader-circle.gif" />

                    <p>Please wait while the system is loading the custom form...</p>
                </div>
            </div>
        </div>
    );

    const fixedHtmlForDhis = html
        .replace(/type="text">/g, 'type="text"/>')
        .replace(/type="checkbox">/g, 'type="checkbox"/>');

    return fixedHtmlForDhis;
}
