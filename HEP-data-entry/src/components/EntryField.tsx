import { createElement } from "typed-html";
import { SectionDataElement, CategoryOptionCombo, HelpTexts } from "../models/Form";

interface EntryFieldAttributes {
    dataElement: SectionDataElement;
    categoryOptionCombo: CategoryOptionCombo;
    sectionId: string;
    helpMessages?: HelpTexts;
    type?: "checkbox" | "radio";
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElement, categoryOptionCombo, sectionId, helpMessages } = attributes;
    const formClass = attributes.type ? "entrytrueonly" : "entryfield";
    const name = `${formClass}-${sectionId}-${categoryOptionCombo.id}`;
    const type = attributes.type || "";

    return (
        <div>
            <input
                name={name}
                class={`${formClass} ${type}`}
                id={`${dataElement.id}-${categoryOptionCombo.id}-val`}
                autocomplete="off"
                type={type}
            />
            {helpMessages ? (
                <i
                    class="fas fa-info-circle help-icon"
                    title={`${helpMessages[categoryOptionCombo.name]}`}
                ></i>
            ) : null}
        </div>
    );
}
