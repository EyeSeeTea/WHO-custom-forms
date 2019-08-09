import { createElement } from "typed-html";
import { SectionDataElement, CategoryOptionCombo, HelpTexts } from "../models/Form";

interface EntryFieldAttributes {
    dataElement: SectionDataElement;
    categoryOptionCombo: CategoryOptionCombo;
    sectionId: string;
    helpMessages?: HelpTexts;
    checkbox?: boolean;
    type?: "checkbox" | "radio";
}

export function EntryField(attributes: EntryFieldAttributes): string {
    const { dataElement, categoryOptionCombo, sectionId, helpMessages } = attributes;
    return (
        <div>
            <input
                name={`entry-${sectionId}-${categoryOptionCombo.id}`}
                class={`entrytrueonly ${attributes.type}`}
                id={`${dataElement.id}-${categoryOptionCombo.id}-val`}
                autocomplete="off"
                type={attributes.type || ""}
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
