import { createElement } from "typed-html";
import { EntryField } from "./EntryField";
import { DataElement } from "../Dhis2Metadata";

function Row(attributes: { dataElement: DataElement; programStageId: string }) {
    const { dataElement, programStageId } = attributes;
    return (
        <tr class="ng-scope">
            <td>
                <span
                    d2-pop-over
                    class="popover-label hideInPrint ng-isolate-scope"
                    data-original-title=""
                    title=""
                >
                    <a
                        href=""
                        ng-attr-title="{{'details'| translate}}"
                        tabindex="-1"
                        class="ng-binding"
                        title="Click to see details"
                    >
                        {dataElement.formName}
                    </a>
                </span>
                <td>
                    <div class="ng-scope">
                        <EntryField dataElement={dataElement} programStageId={programStageId} />
                    </div>
                </td>
            </td>
        </tr>
    );
}

export function Table(attributes: { dataElements: DataElement[]; programStageId: string }) {
    const { dataElements, programStageId } = attributes;
    return (
        <table class="dhis2-list-table-striped small-vertical-spacing">
            <thead>
                <tr>
                    <th class="ng-binding">Data element</th>
                    <th class="ng-binding">Value</th>
                </tr>
            </thead>
            <tbody>
                {dataElements.map(de => (
                    <Row dataElement={de} programStageId={programStageId} />
                ))}
            </tbody>
        </table>
    );
}
