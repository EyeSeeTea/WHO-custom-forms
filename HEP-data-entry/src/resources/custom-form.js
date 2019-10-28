async function applyChangesToForm() {
    const { dataElementTranslations, userLocale } = await getLocaleAndTranslations();
    await replaceDataElementTitles(dataElementTranslations, userLocale);
    const datasetToApplyChanges = $("#custom-form-script").attr("data-dataset-id");
    const currentDataset = $("#selectedDataSetId").val();
    $("#completenessDiv").wrap("<div id='completenessWrapper'></div>");
    if (datasetToApplyChanges === currentDataset) {
        $("#completenessWrapper").hide();
    } else {
        $("#completenessWrapper").show();
    }
}

async function getLocaleAndTranslations() {
    const userLocale = await fetch("http://localhost:8080/api/userSettings.json", {
        method: "GET",
    }).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        return parsed.keyUiLocale;
    });
    const dataElementTranslations = await fetch(
        "http://localhost:8080/api/dataSets.json?fields=sections[dataElements[id,formName,translations]]&filter=id:eq:jfawDJZ5fOX",
        { method: "GET" }
    ).then(async response => {
        const body = await response.text();
        const parsed = JSON.parse(body);
        const all = parsed.dataSets[0].sections.reduce((acc, s) => {
            return [...acc, s.dataElements];
        }, []);
        return _.flatten(all);
    });
    return { dataElementTranslations, userLocale };
}

function replaceDataElementTitles(dataElementTranslations, userLocale) {
    dataElementTranslations.forEach(de => {
        const translation = de.translations.find(
            t => t.locale === userLocale && t.property === "FORM_NAME"
        );
        if (translation) {
            $(`#${de.id}-dataElement`).html(translation.value);
        }
    });
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
