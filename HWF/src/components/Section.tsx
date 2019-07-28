import { createElement } from "typed-html";
import { FormSection } from "../models/Form";
import { Table } from "./Table";

export function Section(attributes: { section: FormSection; i: number }) {
    const { section } = attributes;
    const optionListElements = attributes.i > 0;
    return (
        <div>
            <div class="section-label">{section.title}</div>
            <Table
                dataElements={section.dataElements}
                programStageId={section.programStageId}
                optionListElements={optionListElements}
            />
        </div>
    );
}
