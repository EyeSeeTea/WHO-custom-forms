import { ProgramStage, DataElement } from "../Dhis2Metadata";
import { CustomForm } from "../components/CustomForm";
import * as _ from "lodash";

export interface FormData {
    formSections: FormSection[];
    programStageId: string;
}

export interface FormSection {
    title: string;
    dataElements: DataElement[];
}

const formStaticSections = [
    {
        title: "Reporter Info",
        dataElements: [
            "HEP_POLICY_Track_NameOfRespondent",
            "HEP_POLICY_Track_EmailOfRespondent",
            "HEP_POLICY_Track_InstitutionReporting",
        ],
    },
    {
        title: "Policy Framework",
        dataElements: [
            "HEP_POLICY_Track_NationalPlan",
            "HEP_POLICY_Track_CivilSocietyRepresentativeInvolved",
            "HEP_POLICY_Track_PoliciesStigmaDiscrimination",
            "HEP_POLICY_Track_FundsAllocated",
        ],
    },
    {
        title: "National Guidelines",
        dataElements: [
            "HEP_POLICY_Track_OfficialGuidanceToTest",
            "HEP_POLICY_Track_OfficialGuidanceForDiagnosed",
            "HEP_POLICY_Track_TenofovirEntecavirFirstLine",
            "HEP_POLICY_Track_InterferonFreeFirstLine",
        ],
    },
];

export class Form {
    public static getFormHtml(programStage: ProgramStage): string {
        const formData = this.getFormData(programStage);
        const formHtml = CustomForm({ formData });
        return formHtml;
    }

    public static getFormData(programStage: ProgramStage): FormData {
        const dataElements = programStage.programStageDataElements.map(psde => ({
            id: psde.dataElement.id,
            name: psde.dataElement.name,
            formName: psde.dataElement.formName,
            valueType: psde.dataElement.valueType,
        }));
        const formSections = formStaticSections.map(section => ({
            title: section.title,
            dataElements: section.dataElements.map(deName => {
                const toSubstitute = dataElements.find(de => de.name === deName);
                if (!toSubstitute) {
                    throw new Error(`Required dataElement not on programStage metadata`);
                }
                return toSubstitute;
            }),
        }));
        return { formSections, programStageId: programStage.id };
    }
}

/*
function sortDataElements(dataElements: SectionDataElement[]): OrderedSection {
    const { globalEntry, fields, checkboxes } = _.groupBy(dataElements, dataElement => {
        if (valueTypes.globalEntryCode === dataElement.code) {
            return "globalEntry";
        } else if (valueTypes.entryField.includes(dataElement.valueType)) {
            return "fields";
        } else {
            return "checkboxes";
        }
    });

    return { globalEntry, fields, checkboxes };
}
*/
