import { createElement } from "typed-html";
import { DataElement } from "./DataElement";
import { Section } from "../../domain/common/entities";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { AntivenomEntries } from "../../domain/snakebite/AntivenomEntries";
import { AntivenomEntriesGroup } from "./AntivenomEntriesGroup";

interface SectionsAttributes {
    customMetadata: CustomMetadata;
    antivenomEntries: AntivenomEntries;
    sections: Section[];
}

export function Sections(attributes: SectionsAttributes): string {
    const { customMetadata, antivenomEntries } = attributes;

    return (
        <div>
            <h3>&nbsp;</h3>

            {attributes.sections.map((section, index) => {
                const isAntivenomSection = () => antivenomEntries.section == index + 1;

                const antivenomDataElementIds = antivenomEntries.groups
                    .map(group => group.dataElements.map(de => de.id))
                    .flat();

                const standardDataElements = isAntivenomSection()
                    ? section.dataElements.filter(de => !antivenomDataElementIds.includes(de.id))
                    : section.dataElements;

                return (
                    <div>
                        <hr />
                        <h3 style="text-align: center;">
                            <strong>{section.displayName}</strong>
                        </h3>

                        <h3 style="text-align: center;">&nbsp;</h3>

                        {standardDataElements &&
                            standardDataElements.map(dataElement => {
                                return (
                                    <DataElement
                                        dataElement={dataElement}
                                        customMetadata={customMetadata}
                                    />
                                );
                            })}

                        {isAntivenomSection() &&
                            antivenomEntries.groups &&
                            antivenomEntries.groups.map(group => {
                                return (
                                    <AntivenomEntriesGroup
                                        group={group}
                                        customMetadata={customMetadata}
                                        dataElements={section.dataElements}
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
