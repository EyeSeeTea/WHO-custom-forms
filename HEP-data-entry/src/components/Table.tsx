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
        return <th class={`column-small antigen-tag ${background}`}>{cco.name}</th>;
    });
    return (
        <thead>
            <tr>
                <th class="column-big empty-header-td" />
                {_.flatten(headerTitles)}
                <th class="icon-column-header" />
            </tr>
        </thead>
    );
}

function FieldsRow(attributes: {
    dataElement: SectionDataElement;
    categoryOptionCombos: CategoryOptionCombo[];
    fieldsToRemove: FieldsToRemove[];
    index: number;
}) {
    const { dataElement, categoryOptionCombos, fieldsToRemove, index } = attributes;
    const background = index % 2 === 0 ? "even-row" : "odd-row";
    console.log([index, index % 2 === 0, background]);
    const fieldTds = categoryOptionCombos.map(coc => {
        const greyedField = fieldsToRemove.some(
            fr => dataElement.id === fr.dataElement && coc.id === fr.categoryOptionCombo
        );
        return (
            <td class={`field-container ${background}`}>
                {greyedField ? <p>{`Not applicable for ${coc.name}`}</p> : (
                    <EntryField dataElementId={dataElement.id} categoryOptionComboId={coc.id} />
                )}
            </td>
        );
    });

    return (
        <tr>
            <td class={`column-big ${background} center-text`}>{dataElement.formName}</td>
            {...fieldTds}
            <td class="icon-container">
                <i class="fas fa-info-circle help-icon" title={`${dataElement.formName}`}></i>
            </td>
        </tr>
    );
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
    const background = Form.getCategoryOptionComboColor(categoryOptionCombo);
    return (
        <td class="field-group checkbox-group">
            <div
                class={`checkbox-header ${background}`}
            >{`SOURCES OF DATA FOR ${categoryOptionCombo.name}`}</div>
            {rows}
        </td>
    );
}

export function Table(attributes: TableAttributes): string {
    const {
        formFields: { fields, checkboxes },
        fieldsToRemove,
    } = attributes.section;
    const categoryOptionCombos = Form.getCategoryOptionCombos(fields);
    return (
        <table class="custom-table">
            <Header categoryOptionCombos={categoryOptionCombos} />
            {fields.map((f, i) => (
                <FieldsRow
                    dataElement={f}
                    categoryOptionCombos={categoryOptionCombos}
                    fieldsToRemove={fieldsToRemove}
                    index={i}
                />
            ))}
            <tr>
                <td class="column-big " />
                {categoryOptionCombos.map(coc => (
                    <CheckBoxGroup checkboxes={checkboxes} categoryOptionCombo={coc} />
                ))}
            </tr>
        </table>
    );
}
