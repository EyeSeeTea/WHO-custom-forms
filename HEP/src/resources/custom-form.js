function applyChangesToForm() {
    console.log("applyChangesToForm");
    $("#tabs").tabs();
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
