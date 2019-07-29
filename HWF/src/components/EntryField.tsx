import { createElement } from "typed-html";
import { DataElement } from "../Dhis2Metadata";

interface EntryFieldAttributes {
    dataElement: DataElement;
    programStageId: string;
}

export function EntryField(attributes: EntryFieldAttributes) {
    const { dataElement, programStageId } = attributes;
    const type = dataElement.valueType === "EMAIL" ? "email" : "text";
    return (
        <input
            type={type}
            id={`${programStageId}-${dataElement.id}-val`}
            name={dataElement.id}
            title={dataElement.name}
            input-field-id={dataElement.id}
            class="form-control ng-pristine ng-untouched ng-valid ng-valid-required"
            ng-blur={`saveDatavalue(prStDes.${dataElement.id}, outerForm.${dataElement.id})`}
            ng-model={`currentEvent.${dataElement.id}`}
        ></input>
    );
}
