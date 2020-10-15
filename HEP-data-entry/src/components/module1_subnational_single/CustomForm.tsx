import { createElement } from "typed-html";
import { DataSet } from "../../models/Dhis2Metadata";
import { dataElementGroups, simpleDataElements } from "./dataElementGroups";
import { TrueOnlyEntries } from "./TrueOnlyEntries";
import { getResource } from "./utils";

export default async function CustomForm(dataSet: DataSet): Promise<string> {
    const deInFormsButNotInDataSet = getMissingDataElementsInDataSet(dataSet);

    if (deInFormsButNotInDataSet.length > 0) {
        console.log("Missing data elements in data set", deInFormsButNotInDataSet);
        throw new Error("Missing data elements in data set");
    }

    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");

    console.log(dataSet.id);

    const nameToken = "{{orgUnitName}}";

    const html = (
        <div>
            <style>{style}</style>
            <script src="https://unpkg.com/mustache@4.0.1"></script>
            <script id="template" type="x-tmpl-mustache">
                <div id="cde">
                    <h3> {nameToken}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>SN</th>

                                {dataElementGroups.map(group => {
                                    return <th>{group.order}</th>;
                                })}

                                {simpleDataElements.map(() => {
                                    return <th></th>;
                                })}
                            </tr>
                            <tr>
                                <th>Occupation</th>

                                {dataElementGroups.map(group => {
                                    return (
                                        <th class="numeric-de">{group.inputNumeric.displayName}</th>
                                    );
                                })}

                                {simpleDataElements.map(de => {
                                    return <th class="simple-de">{de.displayName}</th>;
                                })}
                            </tr>
                            <tr>
                                <th>Total</th>
                                {dataElementGroups.map(group => {
                                    const id = `{{orgUnitId}}-${group.inputNumeric.id}`;
                                    const className = group.readOnly
                                        ? "td-input read-only"
                                        : "td-input";

                                    return (
                                        <td class={className}>
                                            <input id={id} type="text" />
                                        </td>
                                    );
                                })}

                                {simpleDataElements.map(de => {
                                    const id = `{{orgUnitId}}-${de.id}`;
                                    const tdContent =
                                        de.type === "text-area" ? (
                                            <textarea id={id} />
                                        ) : (
                                            <input id={id} type="text" />
                                        );

                                    return <td class="td-input">{tdContent}</td>;
                                })}
                            </tr>
                            <tr>
                                <th>Source Type</th>

                                {dataElementGroups.map((group, index) => {
                                    const containerId = `{{orgUnitId}}-checkboxes${index}`;
                                    const className = group.readOnly ? "read-only" : "";

                                    return (
                                        <td class={className}>
                                            <TrueOnlyEntries
                                                containerId={containerId}
                                                inputCheckboxes={group.inputCheckboxes}
                                            />
                                        </td>
                                    );
                                })}

                                {simpleDataElements.map(() => {
                                    return <td></td>;
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </script>
            <script>{javascript}</script>
            <h3 style="text-align: center;">
                <strong>Active Health Workforce Demographic Details</strong>
            </h3>

            <h4 style="text-align: right; font-family: times;">
                <a href="../api/documents/p6IINqTYv2f/data" id="handbook_link" target="_blank">
                    Access the NHWA HANDBOOK
                </a>
            </h4>

            <h4 style="text-align: right; font-family: times;">
                <a href="../api/documents/OCoAAGYwapP/data" id="userguide_link" target="_blank">
                    Access the NHWA USER GUIDE
                </a>
            </h4>

            <h4 style="text-align: right; font-family: times;">
                <a href="../api/documents/KC4DKufIIVw/data" id="occupation_link" target="_blank">
                    Access the NHWA OCCUPATION MAPPING
                </a>
            </h4>

            <div id="mod2_tabs">
                <ul>
                    <li>
                        <a href="#tab0">Working Details</a>
                    </li>
                </ul>

                <div id="tab0">
                    <h2>SECTION 1: HWF WORKING DETAILS</h2>

                    <div id="content">
                        <div id="custom-form-loader">
                            <img id="loader" src="../images/ajax-loader-circle.gif" />

                            <p>Please wait while the system is loading the custom form...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const fixedHtmlForDhis = html
        .replace(/type="text">/g, 'type="text"/>')
        .replace(/type="checkbox">/g, 'type="checkbox"/>');

    return fixedHtmlForDhis;
}

function getMissingDataElementsInDataSet(dataSet: DataSet) {
    const numericInputs = dataElementGroups.map(de => de.inputNumeric.id.split("-")[0]);
    const checkboxesInputs = dataElementGroups.flatMap(de =>
        de.inputCheckboxes.map(de => de.id.split("-")[0])
    );
    const textInputs = simpleDataElements.map(de => de.id.split("-")[0]);

    const allDEInForm = [...numericInputs, ...new Set(checkboxesInputs), ...textInputs].sort();

    const allDEDataSet = dataSet.dataSetElements.map(dse => dse.dataElement.id).sort();

    const deInFormsButNotInDataSet = allDEInForm.filter(de => {
        return !allDEDataSet.includes(de);
    });
    return deInFormsButNotInDataSet;
}
