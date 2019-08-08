import { createElement } from "typed-html";
import { EntryField } from "./EntryField";
import { DataElement } from "../Dhis2Metadata";
import { OptionList } from "./OptionList";

function Row(attributes: { dataElement: DataElement; programStageId: string }) {
    const { dataElement, programStageId } = attributes;

    //Popup not working -
    const PopupTitle = <a>{dataElement.formName}</a>;
    const SpanElement = createElement(
        "span",
        {
            d2PopOver: "",
            class: "popover-label hideInPrint ng-isolate-scope",
            details: "Click to see details",
            content: "prStDes[de.id].dataElement",
            template: "dataelement-details.html",
            trigger: "click",
            placement: "right",
            dataOriginalTitle: "",
            title: "",
        },
        PopupTitle
    );

    const optionListElement = dataElement.useOptionList;
    return (
        <tr class="ng-scope">
            <td>
                {SpanElement}
                <span class="not-for-screen ng-binding">Name of the respondent</span>
            </td>
            <td>
                <div
                    class="hideInPrint ng-scope"
                    ng-if={`!isHidden(prStDes.${dataElement.id}.dataElement.id, currentEvent)`}
                >
                    {optionListElement ? (
                        <OptionList dataElement={dataElement} />
                    ) : (
                        <EntryField dataElement={dataElement} programStageId={programStageId} />
                    )}
                    <span
                        ng-messages={`outerForm.${dataElement.id}.$error`}
                        class="required ng-scope ng-inactive"
                        ng-if={`interacted(outerForm.${dataElement.id})`}
                        ng-messages-include="./templates/error-messages.html"
                    ></span>
                </div>
            </td>
        </tr>
    );
}

export function Table(attributes: { dataElements: DataElement[]; programStageId: string }) {
    const { dataElements, programStageId } = attributes;
    return (
        <table class="dhis2-list-table-striped small-vertical-spacing table-width">
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
