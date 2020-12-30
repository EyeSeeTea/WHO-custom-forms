import { createElement } from "typed-html";
import { Section } from "../../models/d2Models";
import { CustomMetadata } from "./CustomMetadata";

interface SubnationalSectionsAttributes {
    customMetadata: CustomMetadata;
    sections: Section[];
}

export function SubnationalSections(attributes: SubnationalSectionsAttributes): string {
    console.log(attributes.sections.length);
    const html = (
        <div>
            <script src="https://unpkg.com/mustache@4.0.1"></script>
            <script id="orgUnitsTable_template" type="x-tmpl-mustache">
                <table>
                    <thead>
                        <tr>
                            <th>Org unit</th>
                            {/* <th>Numero de casos de Plasmodium Vivax Notificados</th>
                            <th>Numero de Casos de Plasmodium Falciparum Notificados</th>
                            <th>Numero de Casos de Plasmodium Mixto Notificados</th>
                            <th>Cantidad GG por semana</th>
                            <th>Cantidad PDR por semana</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {"{{#rows}}"}
                        <tr>
                            <th>{"{{orgUnitName}}"}</th>
                            {/* <td class="td-input">
                                <input id="{{orgUnitId}}-w1dQHOxKY2e-HllvX50cXC0-val" type="text" />
                            </td>
                            <td class="td-input">
                                <input id="{{orgUnitId}}-QKSlyo1lYdg-HllvX50cXC0-val" type="text" />
                            </td>
                            <td class="td-input">
                                <input id="{{orgUnitId}}-LQTwMcUwPHb-HllvX50cXC0-val" type="text" />
                            </td>
                            <td class="td-input">
                                <input id="{{orgUnitId}}-q5mkCLKcAtA-HllvX50cXC0-val" type="text" />
                            </td>
                            <td class="td-input">
                                <input id="{{orgUnitId}}-BoPocyc4ErP-HllvX50cXC0-val" type="text" />
                            </td> */}
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
