import { createElement } from "typed-html";
import { Section, SectionDataElement } from "../models/Form";
import { EntryField } from "./EntryField";

interface TableAttributes {
    section: Section;
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

function NameRows(attributes: { fields: SectionDataElement[] }): string {
    const rows = attributes.fields.map((de, index) => {
        const background = index % 2 === 0 ? "even-row" : "odd-row";
        return <div class={`column-big ${background} center-text`}>{de.shortName}</div>;
    });
    return <div class="name-field">{rows}</div>;
}

function CheckBoxGroup(attributes: { checkboxes: SectionDataElement[] }): string {
    const rows = attributes.checkboxes.map(de => (
        <div class="elements-row">
            <EntryField
                dataElementId={de.id}
                categoryOptionComboId={de.categoryCombo.categoryOptionCombos[0].id}
                checkbox
            />
            <div>{de.shortName}</div>
        </div>
    ));

    return <div class="field-group checkbox-group">{rows}</div>;
}

function OnlyFields(attributes: { fields: SectionDataElement[] }) {
    const rows = attributes.fields.map(de => (
        <div class="field-container">
            <EntryField
                dataElementId={de.id}
                categoryOptionComboId={de.categoryCombo.categoryOptionCombos[1].id}
            />
        </div>
    ));
    return <div class="field-group">{rows}</div>;
}

export function Table(attributes: TableAttributes): string {
    const { fields, checkboxes } = attributes.section.formFields;
    return (
        <div class="table">
            <Header />
            <div class="elements">
                <NameRows fields={fields} />
                <OnlyFields fields={fields} />
                <CheckBoxGroup checkboxes={checkboxes} />
                <OnlyFields fields={fields} />
                <CheckBoxGroup checkboxes={checkboxes} />
            </div>
        </div>
    );
}
