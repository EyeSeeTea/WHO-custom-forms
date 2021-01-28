import { createElement } from "typed-html";
import { Sections } from "./Sections";
import { DataSet } from "../../models/Dhis2Metadata";
import { CustomMetadata } from "./CustomMetadata";
import { getResource } from "./utils";
import { SubnationalSections } from "./SubnationalSections";

export async function SnakeBiteCustomForm(
    dataSet: DataSet,
    subnationalDataSet: DataSet,
    customMetadata: CustomMetadata
): Promise<string> {
    const style = await getResource("resources/custom-form.css");
    const javascript = await getResource("resources/custom-form.js");
    const sheetseeJs = await getResource("../common/resources/sheetsee.js");

    return (
        <div>
            <style>${style}</style>
            <script
                id="custom-form-script"
                type="text/javascript"
                data-subnational-dataset-id={`${subnationalDataSet.id}`}
            >
                ${javascript}
            </script>
            <script>${sheetseeJs}</script>
            <h2>
                SNAKE BITE ENVENOMING
                <br />
                &nbsp;ANNUAL REPORT
            </h2>
            <div id="tabs">
                <ul id="tabs-list">
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
                <div id="tab1">
                    <SubnationalSections
                        sections={subnationalDataSet.sections}
                        customMetadata={customMetadata}
                    />
                </div>
            </div>
        </div>
    );
}
