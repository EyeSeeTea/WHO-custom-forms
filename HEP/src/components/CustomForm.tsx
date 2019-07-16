import { createElement } from "typed-html";

import { Tabs } from "./Tabs";
import { GlobalTextFields } from "./GlobalTextFields";
import { Section, Form } from "../models/Form";

interface CustomFormAttributes {
    sections: Section[];
}

export function CustomForm(_attributes: CustomFormAttributes): string {
    const sections = _attributes.sections;
    const globalDataElements = _attributes.sections[0].formFields.globalEntry;
    const categoryOptionCombos = Form.getCategoryOptionCombos(globalDataElements);
    return (
        <div>
            <Tabs sections={sections} />
            <GlobalTextFields
                dataElements={globalDataElements}
                categoryOptionCombos={categoryOptionCombos}
            />
        </div>
    );
}
