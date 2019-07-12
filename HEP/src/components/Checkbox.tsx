import { createElement } from "typed-html";

interface CheckboxAttributes {
    dataElementId: string;
    categoryOptionComboId: string;
}

export function Checkbox(attributes: CheckboxAttributes): string {
    const { dataElementId, categoryOptionComboId } = attributes;
    const id = `${dataElementId}-${categoryOptionComboId}-val`;

    return (
        <input
            name="checkbox"
            class="checkbox"
            id={id}
            type="checkbox"
            autocomplete="off"
        />
    );
}
