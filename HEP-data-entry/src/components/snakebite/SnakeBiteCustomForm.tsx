import { createElement } from "typed-html";
import { Sections } from "./Sections";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { getResource } from "./utils";
import { SubnationalSections } from "./SubnationalSections";
import { DataSet } from "../../domain/common/entities";
import { AntivenomEntries } from "../../domain/snakebite/AntivenomEntries";
import {
    antivenomEntriesKey,
    antivenomProductsKey,
    customMetadataKey,
    snakeBiteNamespace,
} from "../../data/snakebite/constants";

export async function SnakeBiteCustomForm(
    dataSet: DataSet,
    subnationalDataSet: DataSet,
    customMetadata: CustomMetadata,
    antivenomEntries: AntivenomEntries
): Promise<string> {
    const style = await getResource("resources/custom-form.css");
    const dataJS = await getResource("resources/data.js");
    const subnationalTabJS = await getResource("resources/subnational-tab.js");
    const antivenomProductsJS = await getResource("resources/antivenom-products.js");
    const customFormJS = await getResource("resources/custom-form.js");
    const sheetseeJs = await getResource("../common/resources/sheetsee.js");

    return (
        <div>
            <style>${style}</style>
            <script
                id="data-script"
                type="text/javascript"
                data-datastore-namespace={snakeBiteNamespace}
                data-datastore-antivenomproducts-key={antivenomProductsKey}
                data-datastore-antivenomentries-key={antivenomEntriesKey}
                data-datastore-custommetadata-key={customMetadataKey}
            >
                ${dataJS}
            </script>
            <script
                id="subnational-tab-script"
                type="text/javascript"
                data-subnational-dataset-id={`${subnationalDataSet.id}`}
            >
                ${subnationalTabJS}
            </script>
            <script>${antivenomProductsJS}</script>
            <script>${customFormJS}</script>
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
                    <div
                        id="dialog-form"
                        class="ui-dialog-content ui-widget-content"
                        style="width: auto; min-height: 0px; max-height: none; height: auto;"
                    >
                        <p id="form-message" style="" />
                        <form>
                            <fieldset>
                                <label for="productName" class="block">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="productName"
                                    id="productName"
                                    value=""
                                    class="text ui-widget-content ui-corner-all"
                                />
                                <label for="manufacturerName" class="block">
                                    Manufacturer Name
                                </label>
                                <input
                                    type="text"
                                    name="manufacturerName"
                                    id="manufacturerName"
                                    value=""
                                    class="text ui-widget-content ui-corner-all"
                                />

                                <div class="radio-container">
                                    <label for="polyvalent">Polyvalent</label>

                                    <input type="radio" name="polyvalent" value="true">
                                        Yes
                                    </input>

                                    <input type="radio" name="polyvalent" value="false">
                                        No
                                    </input>
                                </div>

                                <div class="radio-container">
                                    <label for="monovalent">Monovalent</label>
                                    <input type="radio" name="monovalent" value="true">
                                        Yes
                                    </input>
                                    <input type="radio" name="monovalent" value="false">
                                        No
                                    </input>
                                </div>
                                <div>
                                    <label for="recomended">Recommended</label>
                                    <input type="checkbox" name="recommended" disabled />
                                </div>
                            </fieldset>
                        </form>
                    </div>
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
