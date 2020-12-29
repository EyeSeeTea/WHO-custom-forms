import { createElement } from "typed-html";
import { DataElement } from "./DataElement";
import { Section } from "../../models/d2Models";
import { CustomMetadata } from "./CustomMetadata";

interface SectionsAttributes {
    customMetadata: CustomMetadata;
    sections: Section[];
}

export function Sections(attributes: SectionsAttributes): string {
    const { customMetadata } = attributes;

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
                                        customMetadata={customMetadata}
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
