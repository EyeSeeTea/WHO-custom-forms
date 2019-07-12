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

const Header = () => (
    <div class="header">
        <div class="column-big" />
        <div class="column-small antigen-tag">HBV</div>
        <div class="column-small">SOURCE OF DATA</div>
        <div class="column-small antigen-tag">HCV</div>
        <div class="column-small">SOURCE OF DATA</div>
    </div>
);

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
        <div class="table">
            <Header />
            <div class="elements"> Elements </div>
            <Row field={fields[0]} checkbox={checkboxes[0]} />
        </div>
    );
}
