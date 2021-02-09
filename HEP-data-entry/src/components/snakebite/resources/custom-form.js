async function initializeAndSelectAntivenomEntryFields() {
    initializeAntivenomEntryFields();

    await selectAntivenomProductNames(false);
    await selectAntivenomProductNames(true);
}

$(document).ready(function() {
    initializeAddProductDialog();

    dhis2.util.on("dhis2.de.event.dataValuesLoaded", function(event, ds) {
        $("#tabs").tabs({ active: 0 });
        renderSubnationalTab();

        loadIfUserIsAdmin().then(async () => {
            initializeAndSelectAntivenomEntryFields();
        });
    });
});
