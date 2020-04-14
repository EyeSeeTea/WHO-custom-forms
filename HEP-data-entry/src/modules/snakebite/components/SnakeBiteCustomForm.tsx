import { createElement } from "typed-html";
import { DataSet } from "../../../Dhis2Metadata";
import { Sections } from "./Sections";

export function SnakeBiteCustomForm(dataSet: DataSet): string {
    const javascript = `<script> 
                            $(function () {
                                $("#tabs").tabs();
                            });
                        </script>`;

    return (
        <div>
            <h2>
                SNAKE BITE ENVENOMING
                <br />
                &nbsp;ANNUAL REPORT
            </h2>
            {javascript}

            <div id="tabs">
                <Sections sections={dataSet.sections} />
            </div>
        </div>
    );
}
