import { createElement } from "typed-html";
import * as _ from "lodash";

import { Section, SectionDataElement, Form, CategoryOptionCombo } from "../models/Form";
import { EntryField } from "./EntryField";

interface TableAttributes {
    section: Section;
}

function Header(attributes: { categoryOptionCombos: CategoryOptionCombo[] }) {
    const headerTitles = attributes.categoryOptionCombos.map(cco => [
        <div class="column-small antigen-tag">{cco.name}</div>,
        <div class="column-small">SOURCE OF DATA</div>,
    ]);
    return (
        <div class="header">
            <div class="column-big" />
            {_.flatten(headerTitles)}
            <div class="icon-group-container" />
        </div>
    );
}

function NameRows(attributes: { fields: SectionDataElement[] }): string {
    const rows = attributes.fields.map((de, index) => {
        const background = index % 2 === 0 ? "even-row" : "odd-row";
        return <div class={`column-big ${background} center-text`}>{de.shortName}</div>;
    });
    return <div class="name-field">{rows}</div>;
}

function OnlyFields(attributes: {
    fields: SectionDataElement[];
    categoryOptionCombo: CategoryOptionCombo;
}) {
    const { fields, categoryOptionCombo } = attributes;
    const rows = fields.map(de => (
        <div class="field-container">
            <EntryField dataElementId={de.id} categoryOptionComboId={categoryOptionCombo.id} />
        </div>
    ));
    return <div class="field-group">{rows}</div>;
}

function CheckBoxGroup(attributes: {
    checkboxes: SectionDataElement[];
    categoryOptionCombo: CategoryOptionCombo;
}): string {
    const { checkboxes, categoryOptionCombo } = attributes;
    const rows = checkboxes.map(de => (
        <div class="elements-row">
            <EntryField
                dataElementId={de.id}
                categoryOptionComboId={categoryOptionCombo.id}
                checkbox
            />
            <div>{de.shortName}</div>
        </div>
    ));

    return <div class="field-group checkbox-group">{rows}</div>;
}

function HelpIconsGroup(attributes: { fields: SectionDataElement[] }) {
    const rows = attributes.fields.map(de => (
        <div class="icon-container">
            <i class="fas fa-info-circle help-icon" title={`${de.shortName}`}></i>
        </div>
    ));
    return <div class="icon-group-container">{rows}</div>;
}

export function Table(attributes: TableAttributes): string {
    const { fields, checkboxes } = attributes.section.formFields;
    const categoryOptionCombos = Form.getCategoryOptionCombos(fields);
    const fieldsAndCheckboxes = categoryOptionCombos.map(cco => [
        <OnlyFields fields={fields} categoryOptionCombo={cco} />,
        <CheckBoxGroup checkboxes={checkboxes} categoryOptionCombo={cco} />,
    ]);
    return (
        <div class="table">
            <Header categoryOptionCombos={categoryOptionCombos} />
            <div class="elements">
                <NameRows fields={fields} />
                {_.flatten(fieldsAndCheckboxes)}
                <HelpIconsGroup fields={fields} />
            </div>
        </div>
    );
}
