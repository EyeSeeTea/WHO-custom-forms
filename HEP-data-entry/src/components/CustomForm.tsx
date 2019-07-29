import { createElement } from "typed-html";

import { Tabs } from "./Tabs";
import { GlobalTextFields } from "./GlobalTextFields";
import { DhisSubmitButton } from "./DhisSubmitButton";
import { Section, Form } from "../models/Form";

interface CustomFormAttributes {
    sections: Section[];
}

export function CustomForm(attributes: CustomFormAttributes): string {
    const sections = attributes.sections;
    const globalDataElements = attributes.sections[0].formFields.globalEntry;
    const categoryOptionCombos = Form.getCategoryOptionCombos(globalDataElements);
    return (
        <div>
            <Tabs sections={sections} />
            <GlobalTextFields
                dataElements={globalDataElements}
                categoryOptionCombos={categoryOptionCombos}
            />
            <DhisSubmitButton />
        </div>
    );
}
