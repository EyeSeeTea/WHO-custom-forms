async function applyChangesToForm() {
    const programToApplyChanges = $("#custom-form-script").attr("data-program-id");
    const { dataElementTranslations, sectionTranslations, userLocale } =
        await getLocaleAndTranslations(programToApplyChanges);
    replaceLocalizedTexts(dataElementTranslations, sectionTranslations, userLocale);
}

async function getLocaleAndTranslations(programId) {
    const userLocale = await fetch("../api/userSettings.json", {
        method: "GET",
    }).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        return parsed.keyUiLocale;
    });
    const { dataElementTranslations, sectionTranslations } = await fetch(
        `../api/programs.json?fields=programStages[programStageDataElements[dataElement[dataElementGroups[id,code,shortName,translations,dataElements[id,translations]]]]]&filter=id:eq:${programId}`,
        { method: "GET" }
    ).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        const programStageDataElements =
            parsed.programs[0].programStages[0].programStageDataElements;
        const dataElementGroups = getDataElementGroups(programStageDataElements);
        const allDataElements = dataElementGroups.reduce((acc, s) => {
            return [...acc, s.dataElements];
        }, []);

        const allSections = dataElementGroups.reduce((acc, s) => {
            return [...acc, { id: s.id, translations: s.translations }];
        }, []);

        return {
            dataElementTranslations: _.flatten(allDataElements),
            sectionTranslations: _.flatten(allSections),
        };
    });
    return { dataElementTranslations, sectionTranslations, userLocale };
}

function getDataElementGroups(programStageDataElements) {
    const formCodes = {
        formSection: "HEP_POLICY_SECTION",
        sectionOrder: "SECTION_ORDER",
        formDataElementGroup: "HEP_POLICY_EVENT_CAPTURE",
        optionList: "USE_OPTION_FIELD",
    };
    const allDataElementGroups = programStageDataElements.map(
        psde =>
            psde.dataElement.dataElementGroups &&
            psde.dataElement.dataElementGroups.find(
                deg => deg.code && deg.code.startsWith(formCodes.formSection)
            )
    );
    const dataElementGroups = _.uniqBy(_.compact(allDataElementGroups), "code");
    return dataElementGroups;
}

function replaceLocalizedTexts(dataElementTranslations, sectionTranslations, userLocale) {
    const tableLabels = {
        fr: {
            dataElement: "Élément de données",
            value: "Valeur",
        },
        es: {
            dataElement: "Elemento de datos",
            value: "Valor",
        },
    };

    sectionTranslations.forEach(s => {
        const translation = s.translations.find(
            t => t.locale === userLocale && t.property === "SHORT_NAME"
        );
        if (translation) {
            $(`#${s.id}-section-title`).html(translation.value);
        }
    });

    if (tableLabels[userLocale]) {
        $(".data-element-label").html(tableLabels[userLocale].dataElement);
        $(".value-label").html(tableLabels[userLocale].value);
    }

    dataElementTranslations.forEach(de => {
        const translation = de.translations.find(
            t => t.locale === userLocale && t.property === "FORM_NAME"
        );
        if (translation) {
            $(`span[id="${de.id}-dataElement"]`).html(translation.value);
        }
    });
}

applyChangesToForm();
