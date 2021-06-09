import { createElement } from "typed-html";
import { DataElement } from "../Dhis2Metadata";

export function OptionList(attributes: { dataElement: DataElement }) {
    const { dataElement } = attributes;
    const field = (
        <div class="optionListContainer">
            <div
                ng-click="toggleOptionList()"
                ng-if="!d2Disabled"
                class="optionListInput ng-scope"
                ng-class="{ 'optionListInputOpen': optionListOpen }"
            >
                <div class="optionListInputText">
                    <span
                        ng-if="!d2Model[d2ModelId]"
                        class="optionListInputTextPlaceholder ng-binding ng-scope"
                    >
                        Select or search from the list
                    </span>
                </div>
                <div class="optionListInputDelete" ng-click="removeSelectedOption($event)"></div>
                <div class="optionListInputToggle">
                    <i class="fa fa-caret-up ng-hide" ng-show="optionListOpen"></i>
                    <i class="fa fa-caret-down" ng-hide="optionListOpen"></i>
                </div>
            </div>
        </div>
    );
    if (!dataElement.optionSet) {
        throw new Error("OptionList dataelement has no option set assigned");
    }

    return createElement(
        "d2-option-list",
        {
            class: "ng-isolate-scope",
            d2Model: "currentEvent",
            d2ModelId: `prStDes.${dataElement.id}.dataElement.id`,
            d2Required: `prStDes[${dataElement.id}].compulsory`,
            d2Change: `saveDatavalue(prStDes.${dataElement.id}, outerForm.${dataElement.id})`,
            d2MaxOptionSize: "maxOptionSize",
            d2OptionFilter: "optionVisibility",
            d2Disabled: `!dataElementEditable(prStDes.${dataElement.id})`,
            d2AllOptions: `optionSets.${dataElement.optionSet.id}.options`,
        },
        field
    );
}
