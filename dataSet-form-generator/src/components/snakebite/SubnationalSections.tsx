import { createElement } from "typed-html";
import { Section } from "../../domain/common/entities";
import { CatOptionCombosDataCells } from "./CatOptionCombosDataCells";
import { CatOptionCombosHeaderCells } from "./CatOptionCombosHeaderCells";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";

interface SubnationalSectionsAttributes {
    customMetadata: CustomMetadata;
    subnationalDataSetId: string;
    sections: Section[];
}

export function SubnationalSections(attributes: SubnationalSectionsAttributes): string {
    const { sections, subnationalDataSetId, customMetadata } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
    };

    const html = (
        <div>
            <script id={`${subnationalDataSetId}_template`} type="x-tmpl-mustache">
                <table {...tableAttributes} class="sectionTablesss">
                    <thead>
                        <tr>
                            <th rowspan="2">Org unit</th>
                            {sections &&
                                sections
                                    .map(section => {
                                        return section.dataElements
                                            .map(dataElement => {
                                                const dataElementCustomMetadata =
                                                    customMetadata.dataElements[dataElement.id];

                                                const colspan =
                                                    dataElementCustomMetadata &&
                                                    dataElementCustomMetadata.showTotal === false
                                                        ? dataElement.categoryCombo
                                                              .categoryOptionCombos.length
                                                        : dataElement.categoryCombo
                                                              .categoryOptionCombos.length + 1;

                                                const showDEName =
                                                    dataElementCustomMetadata === undefined ||
                                                    dataElementCustomMetadata.showName ===
                                                        undefined ||
                                                    dataElementCustomMetadata.showName === true;

                                                const name = showDEName
                                                    ? section.displayName +
                                                      " - " +
                                                      dataElement.formName
                                                    : section.displayName;

                                                return (
                                                    <th colspan={colspan}>
                                                        {name}

                                                        {dataElementCustomMetadata &&
                                                        dataElementCustomMetadata.info ? (
                                                            <i
                                                                class="fa fa-info-circle"
                                                                style="font-size:16px;color:#276696;"
                                                                title={`${dataElementCustomMetadata.info}`}
                                                            ></i>
                                                        ) : (
                                                            ""
                                                        )}
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
                            <th>{"{{orgUnitPath}}"}</th>
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
                <div id={`#${subnationalDataSetId}_table`} class="cde"></div>
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
