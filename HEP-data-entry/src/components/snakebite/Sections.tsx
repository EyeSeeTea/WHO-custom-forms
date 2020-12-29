import { createElement } from "typed-html";
import { DataElement } from "./DataElement";
import { Section } from "../../models/d2Models";
import { CustomFormData } from "./CustomFormData";

interface SectionsAttributes {
    customFormData: CustomFormData;
    sections: Section[];
}

export function Sections(attributes: SectionsAttributes): string {
    const { customFormData } = attributes;

    return (
        <div>
            <h3>&nbsp;</h3>

            {attributes.sections.map(section => {
                return (
                    <div>
                        <hr />
                        <h3 style="text-align: center;">
                            <strong>{section.displayName}</strong>
                        </h3>

                        <h3 style="text-align: center;">&nbsp;</h3>

                        {section.dataElements &&
                            section.dataElements.map(dataElement => {
                                return (
                                    <DataElement
                                        dataElement={dataElement}
                                        customFormData={customFormData}
                                    />
                                );
                            })}

                        <p>&nbsp;</p>
                    </div>
                );
            })}
        </div>
    );
}
