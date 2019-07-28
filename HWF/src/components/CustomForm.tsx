import { createElement } from "typed-html";
import { FormData } from "../models/Form";
import { Section } from "./Section";

interface CustomFormAttributes {
    formData: FormData;
}

export function CustomForm(attributes: CustomFormAttributes): string {
    const { sections } = attributes.formData;
    return (
        <div>
            {sections.map(s => (
                <Section section={s} />
            ))}
        </div>
    );
}
