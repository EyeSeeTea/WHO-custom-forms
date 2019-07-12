import { createElement } from "typed-html";

import { Tabs } from "./Tabs";
import { Section } from "../models/Form";

interface CustomFormAttributes {
    sections: Section[];
}

export function CustomForm(_attributes: CustomFormAttributes): string {
    const sections = _attributes.sections;
    return <Tabs sections={sections} />;
}
