function applyChangesToForm() {
    console.log("WORKING");
}

$(document).on("dhis2.de.event.formLoaded", applyChangesToForm);
