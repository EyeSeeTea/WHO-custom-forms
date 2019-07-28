import { createElement } from "typed-html";

export function OptionList(attributes) {
    return (
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
}

/*
<div ng-click="toggleOptionList()" ng-if="!d2Disabled" class="optionListInput ng-scope" ng-class="{ 'optionListInputOpen': optionListOpen }">
    <div class="optionListInputText">
            <span ng-if="!d2Model[d2ModelId]" class="optionListInputTextPlaceholder ng-binding ng-scope">Select or search from the list</span><
    </div>
    <div class="optionListInputDelete" ng-click="removeSelectedOption($event)">
    </div>
    <div class="optionListInputToggle">
        <i class="fa fa-caret-up ng-hide" ng-show="optionListOpen"></i>
        <i class="fa fa-caret-down" ng-hide="optionListOpen"></i>
    </div>
</div>

<d2-option-list d2-model="currentEvent" d2-model-id="de.id" d2-required="prStDes[de.id].compulsory || mandatoryFields[de.id]" d2-disabled="!dataElementEditable(de)" d2-change="saveDatavalue()" d2-max-option-size="maxOptionSize" d2-option-filter="optionVisibility" d2-all-options="optionSets[prStDes[de.id].dataElement.optionSet.id].options" class="ng-isolate-scope"><div class="optionListContainer">
    
</d2-option-list>

*/
