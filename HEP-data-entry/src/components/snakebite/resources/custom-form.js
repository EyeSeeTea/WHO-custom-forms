function updateSubnationalDataElementTotals(orgUnitDataElementId) {
    $('input[name="subnationalTotal"]').each(function() {
        var totalId = $(this).attr("subnationaltotalid");

        if (!orgUnitDataElementId || orgUnitDataElementId == totalId) {
            var total = dhis2.de.getDataElementTotalValue(totalId);

            $(this).val(total);
        }
    });
}

function onSubnationalInputChange(id) {
    const organisationUnitId = id.split("-")[0];
    const dataElementId = id.split("-")[1];
    const optionComboId = id.split("-")[2];

    saveVal(dataElementId, optionComboId, id);
    updateSubnationalDataElementTotals(`${organisationUnitId}-${dataElementId}`);
}

function loadSubnationalValues() {
    const $nextPageButton = document.querySelector(".pagination-next-orgUnitsTable");

    if ($nextPageButton) {
        $nextPageButton.addEventListener("click", function(e) {
            if (e.target.classList.contains("no-pag")) return;

            loadSubnationalValues();
        });
    }

    const $previousPageButton = document.querySelector(".pagination-pre-orgUnitsTable");

    if ($previousPageButton) {
        $previousPageButton.addEventListener("click", function(e) {
            if (e.target.classList.contains("no-pag")) return;

            loadSubnationalValues();
        });
    }

    var periodId = $("#selectedPeriodId").val();

    var params = {
        period: periodId,
        dataSet: $("#custom-form-script").attr("data-subnational-dataset-id"),
        orgUnit: dhis2.de.getCurrentOrganisationUnit(),
        children: true,
    };

    $.ajax({
        url: "../api/dataValueSets",
        data: params,
        dataType: "json",
        success: json => {
            $.safeEach(json.dataValues, function(i, dataValue) {
                var fieldId = `#${dataValue.orgUnit}-${dataValue.dataElement}-${dataValue.categoryOptionCombo}-val`;
                if ($(fieldId).length > 0) {
                    var entryField = $(fieldId);
                    if ("true" == dataValue.value && entryField.attr("type") == "checkbox") {
                        $(fieldId).prop("checked", true);
                    } else {
                        $(fieldId).val(dataValue.value);
                    }
                }
            });

            $("#subnational input[type=text]").on("change", function(e) {
                onSubnationalInputChange(e.target.id);
            });

            updateSubnationalDataElementTotals();
        },
        error: function(xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

function renderSubnationalTab() {
    $("#subnational .cde table tbody").empty();
    $("#custom-form-loader").show();

    const subnationalDataSetId = $("#custom-form-script").attr("data-subnational-dataset-id");

    const filter = `paging=false&var=dataSet:${subnationalDataSetId}&var=orgUnit:${dhis2.de.currentOrganisationUnitId}`;

    $.ajax({
        url: `../api/sqlViews/F9WNm3XNjli/data?${filter}`,
        type: "get",
        success: function(response) {
            const orgUnits = response.listGrid.rows.map(row => ({
                orgUnitId: row[0],
                orgUnitName: row[1],
            }));

            if (orgUnits.length > 0) {
                $("#tabs-list").show();
                var tableOptions = {
                    data: orgUnits,
                    pagination: 10,
                    tableDiv: "#orgUnitsTable",
                    templateID: "orgUnitsTable_template",
                };

                makeTable(tableOptions);

                $("#custom-form-loader").hide();

                loadSubnationalValues();
            } else {
                $("#tabs-list").hide();
            }
        },
        error: function(xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

function loadAntivenomProductSelects() {
    const namespace = $("#custom-form-script").attr("data-datastore-namespace");
    const key = $("#custom-form-script").attr("data-datastore-antivenomproducts-key");

    $.ajax({
        url: `../api/dataStore/${namespace}/${key}`,
        type: "get",
        success: function(response) {
            const getSelectItems = recommended => {
                return response
                    .filter(product => product.recommended === recommended)
                    .map(product => ({
                        id: product.productName,
                        text: product.productName,
                    }));
            };

            const recommendedProducts = getSelectItems(true);
            const nonRecommendedProducts = getSelectItems(false);

            $(".antivenom-recommended-products").select2({
                placeholder: "Select a product",
                allowClear: true,
                data: recommendedProducts,
            });

            $(".antivenom-non-recommended-products").select2({
                placeholder: "Select a product",
                allowClear: true,
                data: nonRecommendedProducts,
            });

            $(".antivenom-products").on("change", e => {
                //var row = $(this).closest('tr');
                debugger;
                const id = e.currentTarget.id.replace("sel", "val");
                $(`#${id}`).val(e.val);
                $(`#${id}`).trigger("change");
            });

            // $(".antivenom-non-recommended-products").on("change", e => {
            //     const id = e.currentTarget.id;
            //     const value = e.val;
            //     console.log({ id });
            //     console.log({ value });
            // });
        },
        error: function(xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

$(document).ready(function() {
    $(function() {
        $("#tabs").tabs({ active: 0 });
    });

    dhis2.util.on("dhis2.de.event.dataValuesLoaded", function(event, ds) {
        renderSubnationalTab();
        loadAntivenomProductSelects();
    });
});
