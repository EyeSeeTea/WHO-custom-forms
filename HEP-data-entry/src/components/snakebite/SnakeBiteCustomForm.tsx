import { createElement } from "typed-html";
import { Sections } from "./Sections";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { getResource } from "./utils";
import { SubnationalSections } from "./SubnationalSections";
import { DataSet } from "../../domain/common/entities";
import { AntivenomEntries } from "../../domain/snakebite/AntivenomEntries";
import { antivenomProductsKey, snakeBiteNamespace } from "../../data/snakebite/constants";

export async function SnakeBiteCustomForm(
    dataSet: DataSet,
    subnationalDataSet: DataSet,
    customMetadata: CustomMetadata,
    antivenomEntries: AntivenomEntries
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
                data-datastore-namespace={snakeBiteNamespace}
                data-datastore-antivenomproducts-key={antivenomProductsKey}
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
                    <Sections
                        sections={dataSet.sections}
                        customMetadata={customMetadata}
                        antivenomEntries={antivenomEntries}
                    />
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
