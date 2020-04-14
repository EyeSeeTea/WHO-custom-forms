import { createElement } from "typed-html";
import { Sections } from "./Sections";
import { DataSet } from "../../models/Dhis2Metadata";

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
