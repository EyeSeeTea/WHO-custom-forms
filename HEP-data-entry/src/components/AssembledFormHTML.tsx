import { createElement } from "typed-html";
import { getResource } from "../utils";

import { Form } from "../models/Form";
import { DataSet } from "../Dhis2Metadata";

interface AssembledFormHTMLAttributes {
    dataSet: DataSet;
    userLocale: string;
}

export async function AssembledFormHTML(attributes: AssembledFormHTMLAttributes): Promise<string> {
    const formHtml = Form.getFormHtml(attributes.dataSet, attributes.userLocale);
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");
    return (
        <html>
            <head>
                <style>${style}</style>
                <script
                    id="custom-form-script"
                    type="text/javascript"
                    data-dataset-id={`${attributes.dataSet.id}`}
                >
                    ${javascript}
                </script>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                    crossorigin="anonymous"
                />
            </head>
            {formHtml}
        </html>
    );
}
