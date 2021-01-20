$(document).ready(function() {
    $(function() {
        $("#tabs").tabs({ active: 0 });
    });

    initializeAddProductDialog();

    dhis2.util.on("dhis2.de.event.dataValuesLoaded", function(event, ds) {
        renderSubnationalTab();

        loadIfUserIsAdmin().then(async () => {
            initializeAntivenomEntryFields();

            await selectAntivenomProductNames(false);
            await selectAntivenomProductNames(true);
        });
    });
});
