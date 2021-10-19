import { createElement } from "typed-html";
import { getResource } from "../utils";

import { Form } from "../models/Form";
import { ProgramStage } from "../Dhis2Metadata";

interface AssembledFormHTMLAttributes {
    programStage: ProgramStage;
    programId: string;
}

export async function AssembledFormHTML(attributes: AssembledFormHTMLAttributes): Promise<string> {
    const formHtml = Form.getFormHtml(attributes.programStage);
    const style = await getResource("custom-form.css");
    const javascript = await getResource("custom-form.js");
    return (
        <html>
            <head>
                <script
                    id="custom-form-script"
                    type="text/javascript"
                    data-program-id={`${attributes.programId}`}
                >
                    ${javascript}
                </script>
                <style>${style}</style>
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
