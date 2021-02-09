var orgUnits = [];
var pageSize = 10;

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

function onSubnationalTextAreaChange(id) {
    const dataElementId = id.split("-")[1];
    const optionComboId = id.split("-")[2];

    saveVal(dataElementId, optionComboId, id);
}

function renamePageOrgUnitPaths(currentPage) {
    if (orgUnits.length === 0) {
        return Promise.resolve(orgUnits);
    } else {
        const orgUnitIds = [
            ...new Set(
                orgUnits
                    .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                    .map(ou => ou.orgUnitPath.split("/"))
                    .flat()
                    .filter(uid => isValidUid(uid))
            ),
        ];

        if (orgUnitIds.length === 0) return Promise.resolve(orgUnits);

        return getOrgUnits(orgUnitIds).then(orgUnitNames => {
            orgUnits = orgUnits.map(ou => {
                const ouPath = ou.orgUnitPath.split("/");
                const ouPathNames = ouPath
                    .map(id => {
                        const orgUnit = orgUnitNames.organisationUnits.find(ou => ou.id === id);
                        return orgUnit ? orgUnit.shortName : id;
                    })
                    .join(" / ");

                return { ...ou, orgUnitPath: ouPathNames };
            });

            return orgUnits;
        });
    }
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
        dataSet: $("#subnational-tab-script").attr("data-subnational-dataset-id"),
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
            $("#subnational textarea").on("change", function(e) {
                debugger;
                onSubnationalTextAreaChange(e.target.id);
            });

            updateSubnationalDataElementTotals();
        },
        error: function(xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

function isValidUid(value) {
    const UID_PATTERN = /^[a-zA-Z]{1}[a-zA-Z0-9]{10}$/;

    return UID_PATTERN.test(value);
}

function onLoadingPage(page) {
    return renamePageOrgUnitPaths(page);
}

function onLoadedPage() {
    loadSubnationalValues();
}

function renderSubnationalTab() {
    $("#subnational .cde table tbody").empty();
    $("#custom-form-loader").show();

    const subnationalDataSetId = $("#subnational-tab-script").attr("data-subnational-dataset-id");

    const filter = `paging=false&var=dataSet:${subnationalDataSetId}&var=orgUnit:${dhis2.de.currentOrganisationUnitId}`;

    $.ajax({
        url: `../api/sqlViews/F9WNm3XNjli/data?${filter}`,
        type: "get",
        success: function(response) {
            orgUnits = response.listGrid.rows.map(row => ({
                orgUnitId: row[0],
                orgUnitName: row[1],
                orgUnitPath: row[2],
            }));

            if (orgUnits.length > 0) {
                $("#tabs-list").show();
                var tableOptions = {
                    data: orgUnits,
                    pagination: pageSize,
                    tableDiv: "#orgUnitsTable",
                    templateID: "orgUnitsTable_template",
                    onLoadingPage,
                    onLoadedPage,
                };

                makeTable(tableOptions);

                $("#custom-form-loader").hide();
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
