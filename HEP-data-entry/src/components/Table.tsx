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
    userLocale: string;
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
            </tr>
        </thead>
    );
}

function FieldsRow(attributes: {
    section: Section;
    dataElement: SectionDataElement;
    categoryOptionCombos: CategoryOptionCombo[];
    fieldsToRemove: FieldsToRemove[];
    index: number;
    userLocale: string;
}) {
    const {
        section,
        dataElement,
        categoryOptionCombos,
        fieldsToRemove,
        index,
        userLocale,
    } = attributes;
    const background = index % 2 === 0 ? "even-row" : "odd-row";
    const helpMessages = Form.getHelpMessagesForDataElement(dataElement);
    const fieldTds = categoryOptionCombos.map(coc => {
        const greyedField = fieldsToRemove.some(
            fr => dataElement.id === fr.dataElement && coc.id === fr.categoryOptionCombo
        );
        return (
            <td class={`field-container ${background}`}>
                {greyedField ? (
                    <p>{`Not applicable for ${coc.name}`}</p>
                ) : (
                    <EntryField
                        sectionId={section.id}
                        dataElement={dataElement}
                        categoryOptionCombo={coc}
                        helpMessages={helpMessages}
                    />
                )}
            </td>
        );
    });
    const dataElementTranslation = dataElement.translations.find(
        t => t.locale === userLocale && t.property === "FORM_NAME"
    );
    const dataElementTitle = dataElementTranslation
        ? dataElementTranslation.value
        : dataElement.formName;
    return (
        <tr>
            <td class={`column-big ${background} center-text`}>
                {dataElementTitle}
                <i class="fas fa-info-circle help-icon" title={`${helpMessages.main}`}></i>
            </td>
            {...fieldTds}
        </tr>
    );
}

function CheckBoxGroup(attributes: {
    checkboxes: SectionDataElement[];
    section: Section;
    categoryOptionCombo: CategoryOptionCombo;
}): string {
    const { checkboxes, categoryOptionCombo, section } = attributes;
    const rows = checkboxes.map(de => (
        <div class="elements-row">
            <EntryField
                sectionId={section.id}
                dataElement={de}
                categoryOptionCombo={categoryOptionCombo}
                type="checkbox"
            />
            <div>{de.formName}</div>
        </div>
    ));
    const background = Form.getCategoryOptionComboColor(categoryOptionCombo);
    return (
        <td class="field-group checkbox-group">
            <div
                class={`checkbox-header ${background}`}
            >{`SOURCES OF DATA FOR ${categoryOptionCombo.name} (${section.description})`}</div>
            {rows}
        </td>
    );
}

export function Table(attributes: TableAttributes): string {
    const { section, userLocale } = attributes;
    const {
        formFields: { fields, checkboxes },
        fieldsToRemove,
    } = section;
    const categoryOptionCombos = Form.getCategoryOptionCombos(fields);
    return (
        <table class="custom-table">
            <Header categoryOptionCombos={categoryOptionCombos} />
            {fields.map((f, i) => (
                <FieldsRow
                    section={section}
                    dataElement={f}
                    categoryOptionCombos={categoryOptionCombos}
                    fieldsToRemove={fieldsToRemove}
                    index={i}
                    userLocale={userLocale}
                />
            ))}
            <tr>
                <td class="column-big " />
                {categoryOptionCombos.map(coc => (
                    <CheckBoxGroup
                        checkboxes={checkboxes}
                        section={section}
                        categoryOptionCombo={coc}
                    />
                ))}
            </tr>
        </table>
    );
}
