function showCheckboxes(element) {
    var checkboxes = document.getElementById(element);

    if (checkboxes.style.display === "none") {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function onNumericInputChange(id) {
    const dataElementId = id.split("-")[1];
    const optionComboId = id.split("-")[2];

    saveVal(dataElementId, optionComboId, id);
}

function onCheckboxInputChange(changedInputId) {}

$(function() {
    $("#mod2_tabs").tabs();

    $("input[type=text]").on("input", function(e) {
        dhis2.de.multiOrganisationUnit = true;
        onNumericInputChange(e.target.id);
    });
    $("input[type=checkbox]").on("change", function(e) {
        dhis2.de.multiOrganisationUnit = true;
        onCheckboxInputChange(e.target.id);
    });
});
