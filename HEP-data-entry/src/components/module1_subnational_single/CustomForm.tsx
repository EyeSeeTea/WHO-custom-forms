import { createElement } from "typed-html";
import { DataSet } from "../../models/Dhis2Metadata";
import { getResource } from "./utils";

export default async function CustomForm(dataSet: DataSet): Promise<string> {
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");

    console.log(dataSet.id);

    return (
        <div>
            <style>${style}</style>
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
                    <div id="cde">
                        <table>
                            <thead>
                                <tr>
                                    <th>Organisation Unit</th>
                                    <th colspan="5">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowspan="4" style="text-align:center;">
                                        Anjouan
                                    </th>
                                    <th>SN</th>
                                    <th style="text-align: center;">1</th>
                                    <th style="text-align: center;">1.1</th>
                                    <th style="text-align: center;">1.2</th>
                                </tr>
                                <tr>
                                    <th>Occupation</th>
                                    <th>Medical Doctors</th>
                                    <th>General Medical Practitioners</th>
                                    <th>Specialist Medical Practitioners</th>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td style="text-align: center">
                                        <input
                                            data-de="qcDKkL7Xkl4"
                                            data-co="Xr12mI7VPn3"
                                            data-ou="WCjXFSd1uoW"
                                            title="NHWA_Medical Doctors Stock (Subnational)"
                                            style="width: 80%;text-align: center;"
                                        />
                                    </td>
                                    <td style="text-align: center;">
                                        <input
                                            id="WCjXFSd1uoW-mHFT8rZ6ksz-Xr12mI7VPn3-val"
                                            type="text"
                                            title="NHWA_General Medical Practitioners Stock (Subnational)"
                                            style="width: 80%;text-align: center;"
                                        />
                                    </td>
                                    <td style="text-align: center;">
                                        <input
                                            data-de="qMdjQN91JDi"
                                            data-co="Xr12mI7VPn3"
                                            data-ou="WCjXFSd1uoW"
                                            id="-Xr12mI7VPn3-val"
                                            title="NHWA_Medical Doctors Stock (Subnational)"
                                            style="width: 80%;text-align: center;"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Source Type</th>
                                    <td style="text-align: left;">
                                        <div class="multiselect">
                                            <div
                                                class="selectBox"
                                                onclick="showCheckboxes('checkboxes1')"
                                            >
                                                <select>
                                                    <option>Select an option</option>
                                                </select>
                                                <div class="overSelect">&nbsp;</div>
                                            </div>

                                            <div class="hwf" id="checkboxes1">
                                                <table>
                                                    <tbody>
                                                        <tr style="text-align: left;">
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="bj9TvyIDtwi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Academia"
                                                                    />
                                                                    Academia
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="lcB0UtS4nuB"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) International organisations"
                                                                    />
                                                                    International organisation
                                                                </label>
                                                                <br />
                                                                <label for="two">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="LvGn3KFEzvA"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Ministry of Health"
                                                                    />
                                                                    Ministry of Health
                                                                </label>
                                                                <br />
                                                                <label for="three">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="wcnRf5LJrnK"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Other Ministries"
                                                                    />
                                                                    Ministry of Internal or External
                                                                    Affairs
                                                                </label>
                                                                <br />
                                                                <label for="four">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="MXfWGD11wLh"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Ministry of Labour"
                                                                    />
                                                                    Ministry of Labour
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="P5jMO9Y0SRn"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) OECD/Eurostat/WHO-EURO Questionnaire"
                                                                    />
                                                                    Multi Agency organisations
                                                                </label>
                                                                <br />
                                                                <label for="six">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="eWjpUQpzWKX"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) National HRH Observatory"
                                                                    />
                                                                    National HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label for="seven">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="hC2N9T8F5JD"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) National Statistical Office"
                                                                    />
                                                                    National/Central Statistical
                                                                    Office
                                                                </label>
                                                                <br />
                                                                <label for="eight">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="xgbBSeyiDWp"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Other databases"
                                                                    />
                                                                    Other multi Agency databases
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="IhnQTXo2sCi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) WHO databases"
                                                                    />
                                                                    Other WHO Regional databases
                                                                </label>
                                                                <br />
                                                                <label for="ten">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="rEUC186wftQ"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Professional association"
                                                                    />
                                                                    Professional association
                                                                </label>
                                                                <br />
                                                                <label for="eleven">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="s5mo8EjeKiY"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Regional HRH Observatory"
                                                                    />
                                                                    Regional HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label for="tweleve">
                                                                    <input
                                                                        data-de="TVBVT6naFjQ"
                                                                        data-co="ADfCJWnnU2O"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Medical Doctors composition and distribution source type  (Subnational) Regulatory bodies"
                                                                    />
                                                                    Regulatory bodies
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="text-align: left;">
                                        <div class="multiselect">
                                            <div
                                                class="selectBox"
                                                onclick="showCheckboxes('checkboxes2')"
                                            >
                                                <select>
                                                    <option>Select an option</option>
                                                </select>
                                                <div class="overSelect">&nbsp;</div>
                                            </div>

                                            <div class="hwf" id="checkboxes2">
                                                <table>
                                                    <tbody>
                                                        <tr style="text-align: left;">
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="bj9TvyIDtwi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        id="t8Oxv1y44wM-bj9TvyIDtwi-val"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Academia"
                                                                    />
                                                                    Academia
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="lcB0UtS4nuB"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) International organisations"
                                                                    />
                                                                    International organisations
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="LvGn3KFEzvA"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Ministry of Health"
                                                                    />
                                                                    Ministry of Health
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="wcnRf5LJrnK"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Other Ministries"
                                                                    />
                                                                    Ministry of Internal or External
                                                                    Affairs
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="MXfWGD11wLh"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Ministry of Labour"
                                                                    />
                                                                    Ministry of Labour
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="P5jMO9Y0SRn"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) OECD/Eurostat/WHO-EURO Questionnaire"
                                                                    />
                                                                    Multi Agency organisations
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="eWjpUQpzWKX"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) National HRH Observatory"
                                                                    />
                                                                    National HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="hC2N9T8F5JD"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) National Statistical Office"
                                                                    />
                                                                    National/Central Statistical
                                                                    Office
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="xgbBSeyiDWp"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Other databases"
                                                                    />
                                                                    Other multi Agency databases
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="IhnQTXo2sCi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) WHO databases"
                                                                    />
                                                                    Other WHO Regional databases
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="rEUC186wftQ"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Professional association"
                                                                    />
                                                                    Professional association
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="s5mo8EjeKiY"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Regional HRH Observatory"
                                                                    />
                                                                    Regional HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="t8Oxv1y44wM"
                                                                        data-co="ADfCJWnnU2O"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_General Medical Practitioners composition and distribution source type (Subnational) Regulatory bodies"
                                                                    />
                                                                    Regulatory bodies
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                    <td colspan="3" style="text-align: left;">
                                        <div class="multiselect">
                                            <div
                                                class="selectBox"
                                                onclick="showCheckboxes('checkboxes3')"
                                            >
                                                <select>
                                                    <option>Select an option</option>
                                                </select>
                                                <div class="overSelect">&nbsp;</div>
                                            </div>

                                            <div class="hwf" id="checkboxes3">
                                                <table>
                                                    <tbody>
                                                        <tr style="text-align: left;">
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="bj9TvyIDtwi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Academia"
                                                                    />
                                                                    Academia
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="lcB0UtS4nuB"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) International organisations"
                                                                    />
                                                                    International organisations
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="LvGn3KFEzvA"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Ministry of Health"
                                                                    />
                                                                    Ministry of Health
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="wcnRf5LJrnK"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Other Ministries"
                                                                    />
                                                                    Ministry of Internal or External
                                                                    Affairs
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="MXfWGD11wLh"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Ministry of Labour"
                                                                    />
                                                                    Ministry of Labour
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="P5jMO9Y0SRn"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) OECD/Eurostat/WHO-EURO Questionnaire"
                                                                    />
                                                                    Multi Agency organisations
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="eWjpUQpzWKX"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) National HRH Observatory"
                                                                    />
                                                                    National HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="hC2N9T8F5JD"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) National Statistical Office"
                                                                    />
                                                                    National/Central Statistical
                                                                    Office
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="xgbBSeyiDWp"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Other databases"
                                                                    />
                                                                    Other multi Agency databases
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="IhnQTXo2sCi"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) WHO databases"
                                                                    />
                                                                    Other WHO Regional databases
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="rEUC186wftQ"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Professional association"
                                                                    />
                                                                    Professional association
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="s5mo8EjeKiY"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Regional HRH Observatory"
                                                                    />
                                                                    Regional HRH Observatory
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    <input
                                                                        data-de="BhkUnrfLZ1F"
                                                                        data-co="ADfCJWnnU2O"
                                                                        data-ou="WCjXFSd1uoW"
                                                                        type="checkbox"
                                                                        title="NHWA_Specialist Medical Practitioners composition and distribution source type (Subnational) Regulatory bodies"
                                                                    />
                                                                    Regulatory bodies
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
