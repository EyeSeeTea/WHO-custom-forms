import { createElement } from "typed-html";
import { FormData } from "../models/Form";

interface CustomFormAttributes {
    formData: FormData;
}

export function CustomForm(attributes: CustomFormAttributes): string {
    console.log(attributes.formData);
    return <div class="test-class">Custom Form</div>;
}
