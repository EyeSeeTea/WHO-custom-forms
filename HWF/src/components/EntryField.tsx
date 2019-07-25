import { createElement } from "typed-html";
import { DataElement } from "../Dhis2Metadata";

interface EntryFieldAttributes {
    dataElement: DataElement;
    programStageId: string;
}

export function EntryField(attributes: EntryFieldAttributes) {
    const { dataElement, programStageId } = attributes;
    return (
        <input
            type="email"
            id={`${programStageId}-${dataElement.id}-val`}
            name={dataElement.id}
            title={dataElement.name}
            input-field-id={dataElement.id}
            class="ng-pristine ng-untouched ng-valid ng-valid-required"
            ng-class={`getInputNotifcationClass(prStDes.${dataElement.id}.dataElement.id, true)`}
            ng-blur={`saveDatavalue(prStDes.${dataElement.id}, outerForm.${dataElement.id})`}
            ng-model={`currentEvent.${dataElement.id}`}
            ng-required="false"
        ></input>
    );
}
/*
<input
    type="text"
    ng-class="getInputNotifcationClass(prStDes.pdjW91aUpn1.dataElement.id, true)"
    ng-blur="saveDatavalue(prStDes.pdjW91aUpn1, outerForm.pdjW91aUpn1)"
    id="JVN4ip9Wyig-pdjW91aUpn1-val"
    name="pdjW91aUpn1"
    title="HEP_POLICY_Track_NameOfRespondent"
    ng-model="currentEvent.pdjW91aUpn1"
    input-field-id="pdjW91aUpn1"
    ng-disabled="!dataElementEditable(prStDes.pdjW91aUpn1)"
    ng-required="false"
    class="ng-pristine ng-untouched ng-valid ng-valid-required"
></input>;
*/
