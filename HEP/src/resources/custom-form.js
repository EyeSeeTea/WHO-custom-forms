function applyChangesToForm() {
    const datasetToApplyChanges = $("#custom-form-script").attr("dataSetId");
    const currentDataset = $("#selectedDataSetId").val();
    if (datasetToApplyChanges === currentDataset) {
        // removeAttr not working for some reason, WIP
        $("#completenessDiv")
            .removeAttr("style")
            .css("display", "block");
    } else {
        $("#completenessDiv")
            .removeAttr("style")
            .css("display", "block");
    }
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
