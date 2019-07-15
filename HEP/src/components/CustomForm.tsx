import { createElement } from "typed-html";

import { Tabs } from "./Tabs";
import { GlobalTextField } from "./GlobalTextField";
import { Section } from "../models/Form";

interface CustomFormAttributes {
    sections: Section[];
}

export function CustomForm(_attributes: CustomFormAttributes): string {
    const sections = _attributes.sections;
    const globalDataElement = _attributes.sections[0].formFields.globalEntry;
    return (
        <div>
            <Tabs sections={sections} />
            <GlobalTextField dataElement={globalDataElement[0]} />
        </div>
    );
}
