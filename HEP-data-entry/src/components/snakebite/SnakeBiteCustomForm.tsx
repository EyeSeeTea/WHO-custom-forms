import { createElement } from "typed-html";
import { Sections } from "./Sections";
import { DataSet } from "../../models/Dhis2Metadata";
import { CustomMetadata } from "./CustomMetadata";
import { getResource } from "./utils";

export async function SnakeBiteCustomForm(
    dataSet: DataSet,
    customMetadata: CustomMetadata
): Promise<string> {
    const style = await getResource("resources/custom-form.css");
    const customFormJs = await getResource("resources/custom-form.js");
    const sheetseeJs = await getResource("../common/resources/sheetsee.js");

    const showSubnational = true;

    return (
        <div>
            <style>${style}</style>
            <script>${customFormJs}</script>
            <script>${sheetseeJs}</script>
            <h2>
                SNAKE BITE ENVENOMING
                <br />
                &nbsp;ANNUAL REPORT
            </h2>

            {showSubnational ? (
                <div id="tabs">
                    <ul>
                        <li>
                            <a href="#tab0">National</a>
                        </li>
                        <li>
                            <a href="#tab1">Subnational</a>
                        </li>
                    </ul>

                    <div id="tab0">
                        <Sections sections={dataSet.sections} customMetadata={customMetadata} />
                    </div>
                    <div id="tab1">{"Subnational"}</div>
                </div>
            ) : (
                <div id="tabs">
                    <Sections sections={dataSet.sections} customMetadata={customMetadata} />
                </div>
            )}
        </div>
    );
}
