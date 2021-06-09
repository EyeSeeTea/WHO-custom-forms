async function initializeAndSelectAntivenomEntryFields() {
    initializeAntivenomEntryFields();

    await selectAntivenomProductNames(false);
    await selectAntivenomProductNames(true);
}

$(document).ready(function () {
    initializeAddProductDialog();

    dhis2.util.on("dhis2.de.event.dataValuesLoaded", function (event, ds) {
        selectedOrgUnitId = dhis2.de.currentOrganisationUnitId;
        $("#tabs").tabs({ active: 0 });

        $(".read-only").each(function () {
            $(this).prop("readonly", true);
        });

        const subnationalTabs = [];

        $(".subnational-tab").each(function () {
            const subnationalDataSetId = $(this).data("dataset");

            subnationalTabs.push(
                new SubnationalTab(
                    $(this),
                    subnationalDataSetId,
                    dhis2.de.currentOrganisationUnitId
                )
            );
        });

        subnationalTabs.forEach(tab => tab.render());

        loadIfUserIsAdmin().then(async () => {
            initializeAndSelectAntivenomEntryFields();
        });
    });
});
