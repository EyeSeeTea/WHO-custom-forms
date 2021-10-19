async function applyChangesToForm() {
    const datasetToApplyChanges = $("#custom-form-script").attr("data-dataset-id");
    const currentDataset = $("#selectedDataSetId").val();
    $("#completenessDiv").wrap("<div id='completenessWrapper'></div>");
    if (datasetToApplyChanges === currentDataset) {
        const { dataElementTranslations, sectionTranslations, userLocale } =
            await getLocaleAndTranslations(currentDataset);
        replaceLocalizedTexts(dataElementTranslations, sectionTranslations, userLocale);
        $("#completenessWrapper").hide();
    } else {
        $("#completenessWrapper").show();
    }
}

async function getLocaleAndTranslations(dataSetId) {
    const userLocale = await fetch("../api/userSettings.json", {
        method: "GET",
    }).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        return parsed.keyUiLocale;
    });

    const { dataElementTranslations, sectionTranslations } = await fetch(
        `../api/dataSets.json?fields=sections[id,translations,dataElements[id,name,formName,translations]]&filter=id:eq:${dataSetId}`,
        { method: "GET" }
    ).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        const allDataElements = parsed.dataSets[0].sections.reduce((acc, s) => {
            return [...acc, s.dataElements];
        }, []);

        const allSections = parsed.dataSets[0].sections.reduce((acc, s) => {
            return [...acc, { id: s.id, translations: s.translations }];
        }, []);

        return {
            dataElementTranslations: _.flatten(allDataElements),
            sectionTranslations: _.flatten(allSections),
        };
    });
    return { dataElementTranslations, sectionTranslations, userLocale };
}

function replaceLocalizedTexts(dataElementTranslations, sectionTranslations, userLocale) {
    const globalFieldsStaticTranslations = text => ({
        es: {
            HBV: `${text} para toda la cascada HBV`,
            HCV: `${text} para toda la cascada HCV`,
        },
        fr: {
            HBV: `${text} pour toute la cascade VHB`,
            HCV: `${text} pour toute la cascade VHC`,
        },
    });
    sectionTranslations.forEach(s => {
        const translation = s.translations.find(
            t => t.locale === userLocale && t.property === "NAME"
        );
        if (translation) {
            $(`#${s.id}-section-title`).html(translation.value);
        }
    });
    dataElementTranslations.forEach(de => {
        const translation = de.translations.find(
            t => t.locale === userLocale && t.property === "FORM_NAME"
        );
        if (de.name === "HEP_CASCADE_Additional_Information" && translation) {
            $(`span[id="${de.id}-global-dataElements-0"]`).html(
                globalFieldsStaticTranslations(translation.value)[userLocale].HBV
            );
            $(`span[id="${de.id}-global-dataElements-1"]`).html(
                globalFieldsStaticTranslations(translation.value)[userLocale].HCV
            );
        } else {
            if (translation) {
                $(`span[id="${de.id}-dataElement"]`).html(translation.value);
            }

            const descriptionTranslation = de.translations.find(
                t => t.locale === userLocale && t.property === "DESCRIPTION"
            );
            if (descriptionTranslation) {
                const parsedDescription = JSON.parse(descriptionTranslation.value);
                $(`i[id="${de.id}-dataElement-description"]`).prop("title", parsedDescription.main);
                $(`i[id="${de.id}-HBV-field-description"]`).prop("title", parsedDescription.HBV);
                $(`i[id="${de.id}-HCV-field-description"]`).prop("title", parsedDescription.HCV);
            }
        }
    });
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
