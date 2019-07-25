import { createElement } from "typed-html";
import { DataElement } from "../Dhis2Metadata";
import { EntryField } from "./EntryField";

function Row(attributes: { dataElement: DataElement; programStageId: string }) {
    const { dataElement, programStageId } = attributes;
    return (
        <div class="table-row">
            <div class="label-col">{dataElement.formName}</div>
            <div class="field-col">
                <EntryField dataElement={dataElement} programStageId={programStageId} />
            </div>
        </div>
    );
}

export function Table(attributes: { dataElements: DataElement[]; programStageId: string }) {
    const { dataElements, programStageId } = attributes;
    return (
        <table class="section-table">
            {dataElements.map(de => (
                <Row dataElement={de} programStageId={programStageId} />
            ))}
        </table>
    );
}
