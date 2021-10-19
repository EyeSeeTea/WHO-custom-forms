import { createElement } from "typed-html";
import * as _ from "lodash";

import { Tabs } from "./Tabs";
import { GlobalTextFields } from "./GlobalTextFields";
import { DhisSubmitButton } from "./DhisSubmitButton";
import { Form } from "./models/Form";
import { Section } from "../../domain/common/entities";

interface CustomFormAttributes {
    sections: Section[];
}

export function CustomForm(attributes: CustomFormAttributes): string {
    const sections = attributes.sections;
    if (_.isEmpty(attributes.sections)) {
        throw new Error("Missing sections");
    }
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
