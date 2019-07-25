import { createElement } from "typed-html";
import { FormData } from "../models/Form";
import { Section } from "./Section";

interface CustomFormAttributes {
    formData: FormData;
}

export function CustomForm(attributes: CustomFormAttributes): string {
    console.log(attributes.formData);
    return (
        <div>
            <div class="test-class">Custom Form</div>
            <Section section={attributes.formData.sections[0]} />
        </div>
    );
}
