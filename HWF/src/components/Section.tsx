import { createElement } from "typed-html";
import { FormSection } from "../models/Form";
import { Table } from "./Table";

export function Section(attributes: { section: FormSection }) {
    const { section } = attributes;
    return (
        <div>
            <div class="section-title">{section.title}</div>
            <Table dataElements={section.dataElements} programStageId={section.programStageId} />
        </div>
    );
}
