function applyChangesToForm() {
    const datasetToApplyChanges = $("#custom-form-script").attr("data-dataset-id");
    const currentDataset = $("#selectedDataSetId").val();
    $("#completenessDiv").wrap("<div id='completenessWrapper'></div>");
    if (datasetToApplyChanges === currentDataset) {
        $("#completenessWrapper").hide();
    } else {
        $("#completenessWrapper").show();
    }
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
