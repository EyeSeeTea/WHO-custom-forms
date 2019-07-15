function applyChangesToForm() {
    console.log("applyChangesToForm");
    $("#completenessDiv").remove();
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
