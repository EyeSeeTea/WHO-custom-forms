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
};

export class Form {
    public static getFormHtml(programStage: ProgramStage): string {
        const formData = this.getFormData(programStage);
        const formHtml = CustomForm({ formData });
        return formHtml;
    }

    public static getFormData(programStage: ProgramStage): FormData {
        const allDataElementGroups = programStage.programStageDataElements.map(
            psde =>
                psde.dataElement.dataElementGroups.filter(deg =>
                    new RegExp("^" + formCodes.formSection).test(deg.code)
                )[0]
        );
        const dataElementGroups = _.uniqBy(allDataElementGroups, "code");

        const sections = dataElementGroups.map(deg => {
            const orderAttribute = deg.attributeValues.find(
                av => av.attribute.code === formCodes.sectionOrder
            );
            const order = orderAttribute && orderAttribute.value;
            return {
                title: deg.shortName,
                programStageId: programStage.id,
                order,
                dataElements: deg.dataElements,
            };
        });

        const orderedSections: FormSection[] = _(sections)
            .uniqBy("order")
            .sortBy("order")
            .value();

        return { sections: orderedSections };
    }
}
