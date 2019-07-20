import { createElement } from "typed-html";
import * as _ from "lodash";

import {
    Section,
    SectionDataElement,
    Form,
    CategoryOptionCombo,
    FieldsToRemove,
} from "../models/Form";
import { EntryField } from "./EntryField";

interface TableAttributes {
    section: Section;
}

function Header(attributes: { categoryOptionCombos: CategoryOptionCombo[] }) {
    const headerTitles = attributes.categoryOptionCombos.map(cco => {
        const background = Form.getCategoryOptionComboColor(cco);
        return [
            <div class={`column-small antigen-tag ${background}`}>{cco.name}</div>,
            <div class={`column-small ${background}`}>SOURCE OF DATA</div>,
        ];
    });
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
        return <div class={`column-big ${background} center-text`}>{de.formName}</div>;
    });
    return <div class="name-field">{rows}</div>;
}

function OnlyFields(attributes: {
    fields: SectionDataElement[];
    categoryOptionCombo: CategoryOptionCombo;
    fieldsToRemove: FieldsToRemove[];
}) {
    const { fields, categoryOptionCombo, fieldsToRemove } = attributes;
    const rows = fields.map((de, index) => {
        const background = index % 2 === 0 ? "even-row" : "odd-row";
        const greyedField = fieldsToRemove.some(
            fr => de.id === fr.dataElement && categoryOptionCombo.id === fr.categoryOptionCombo
        );
        return (
            <div class={`field-container ${background}`}>
                {greyedField ? null : (
                    <EntryField
                        dataElementId={de.id}
                        categoryOptionComboId={categoryOptionCombo.id}
                    />
                )}
            </div>
        );
    });
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
            <div>{de.formName}</div>
        </div>
    ));

    return <div class="field-group checkbox-group">{rows}</div>;
}

function HelpIconsGroup(attributes: { fields: SectionDataElement[] }) {
    const rows = attributes.fields.map(de => (
        <div class="icon-container">
            <i class="fas fa-info-circle help-icon" title={`${de.formName}`}></i>
        </div>
    ));
    return <div class="icon-group-container">{rows}</div>;
}

export function Table(attributes: TableAttributes): string {
    const {
        formFields: { fields, checkboxes },
        fieldsToRemove,
    } = attributes.section;
    const categoryOptionCombos = Form.getCategoryOptionCombos(fields);
    const fieldsAndCheckboxes = categoryOptionCombos.map(cco => [
        <OnlyFields fields={fields} categoryOptionCombo={cco} fieldsToRemove={fieldsToRemove} />,
        <CheckBoxGroup checkboxes={checkboxes} categoryOptionCombo={cco} />,
    ]);
    return (
        <div class="custom-table">
            <Header categoryOptionCombos={categoryOptionCombos} />
            <div class="elements">
                <NameRows fields={fields} />
                {_.flatten(fieldsAndCheckboxes)}
                <HelpIconsGroup fields={fields} />
            </div>
        </div>
    );
}
