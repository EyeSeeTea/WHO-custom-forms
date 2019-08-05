import { ProgramStage, DataElement } from "../Dhis2Metadata";
import { CustomForm } from "../components/CustomForm";
import * as _ from "lodash";

export interface FormData {
    sections: FormSection[];
}

export interface FormSection {
    title: string;
    dataElements: DataElement[];
    programStageId: string;
}

export const formCodes = {
    formSection: "HEP_POLICY_SECTION",
    sectionOrder: "SECTION_ORDER",
    formDataElementGroup: "HEP_POLICY_EVENT_CAPTURE",
    optionList: "USE_OPTION_FIELD",
};

export class Form {
    public static getFormHtml(programStage: ProgramStage): string {
        const formData = this.getFormData(programStage);
        const formHtml = CustomForm({ formData });
        return formHtml;
    }

    public static getFormData(programStage: ProgramStage): FormData {
        if (
            !programStage.programStageDataElements ||
            _.isEmpty(programStage.programStageDataElements)
        ) {
            throw new Error("No programStage has no dataElements assigned");
        }
        const allDataElementGroups = programStage.programStageDataElements.map(
            psde =>
                psde.dataElement.dataElementGroups &&
                psde.dataElement.dataElementGroups.find(
                    deg => deg.code && deg.code.startsWith(formCodes.formSection)
                )
        );
        const dataElementGroups = _.uniqBy(_.compact(allDataElementGroups), "code");

        const sections = dataElementGroups.map(deg => {
            if (!deg.attributeValues || !deg.dataElements || !deg.shortName) {
                throw new Error(
                    "DataElementGroups not complete, missing dataElements, attributes or shortName"
                );
            }
            const orderAttribute = deg.attributeValues.find(
                av => av.attribute.code === formCodes.sectionOrder
            );
            const order = orderAttribute && orderAttribute.value;
            const formattedDataElements = deg.dataElements.map(de => ({
                ...de,
                useOptionList:
                    de.attributeValues &&
                    de.attributeValues.some(
                        av => av.attribute && av.attribute.code === formCodes.optionList
                    ),
            }));
            return {
                title: deg.shortName,
                programStageId: programStage.id,
                order,
                dataElements: formattedDataElements,
            };
        });

        const orderedSections: FormSection[] = _(sections)
            .uniqBy("order")
            .sortBy("order")
            .value();

        return { sections: orderedSections };
    }
}
