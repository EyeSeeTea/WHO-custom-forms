import { createElement } from "typed-html";
import { DataSet } from "../../models/Dhis2Metadata";
import { dataElementGroups } from "./dataElementGroups";
//import { dataElements } from "./dataElements";
import { getResource } from "./utils";

export default async function CustomForm(dataSet: DataSet): Promise<string> {
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");

    console.log(dataSet.id);

    const nameToken = "{{orgUnitName}}";

    return (
        <div>
            <style>${style}</style>
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
                            </tr>
                            <tr>
                                <th>Occupation</th>

                                {dataElementGroups.map(group => {
                                    return (
                                        <th class="numeric-de">{group.inputNumeric.displayName}</th>
                                    );
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
                            </tr>
                            <tr>
                                <th>Source Type</th>

                                {dataElementGroups.map((group, index) => {
                                    const onClick = `showCheckboxes('checkboxes${index}')`;
                                    const containerId = `checkboxes${index}`;
                                    const className = group.readOnly ? "read-only" : "";

                                    return (
                                        <td class={className}>
                                            <div class="multiselect">
                                                <div class="selectBox" onclick={onClick}>
                                                    <select>
                                                        <option>Select an option</option>
                                                    </select>
                                                    <div class="overSelect">&nbsp;</div>
                                                </div>

                                                <div class="hwf" id={containerId}>
                                                    {group.inputCheckboxes.map(check => {
                                                        const checkId = `{{orgUnitId}}-${check.id}`;

                                                        return (
                                                            <label class="check">
                                                                <input
                                                                    id={checkId}
                                                                    type="checkbox"
                                                                />
                                                                {check.displayName}
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </script>
            <script>${javascript}</script>
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

                    <div id="content"></div>
                </div>
            </div>
        </div>
    );
}
