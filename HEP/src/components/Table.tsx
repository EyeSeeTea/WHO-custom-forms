import { createElement } from "typed-html";
import { Section, SectionDataElement } from "../models/Form";
import { EntryField } from "./EntryField";
import { Checkbox } from "./Checkbox";

export interface TableAttributes {
    section: Section;
}

export interface RowAttributes {
    field: SectionDataElement;
    checkbox: SectionDataElement;
}

function Row(attributes: RowAttributes): string {
    const { field, checkbox } = attributes;
    return (
        <div>
            <div>{field.shortName}</div>
            <div>
                <EntryField
                    dataElementId={field.id}
                    categoryOptionComboId={field.categoryCombo.id}
                />
            </div>
            <div>
                <Checkbox
                    dataElementId={checkbox.id}
                    categoryOptionComboId={checkbox.categoryCombo.id}
                />
            </div>
            <div>{checkbox.shortName}</div>
        </div>
    );
}

export function Table(attributes: TableAttributes): string {
    const { fields, checkboxes } = attributes.section.formFields;
    return (
        <div>
            <div> HEADER </div>
            <Row field={fields[0]} checkbox={checkboxes[0]} />
        </div>
    );
    return "";
}
