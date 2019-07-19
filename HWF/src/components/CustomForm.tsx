import { createElement } from "typed-html";
import { ProgramStage } from "../Dhis2Metadata";

interface CustomFormAttributes {
    programStage: ProgramStage;
}

export function CustomForm(attributes: CustomFormAttributes): string {
    console.log(attributes.programStage);
    return <div class="test-class">Custom Form</div>;
}
