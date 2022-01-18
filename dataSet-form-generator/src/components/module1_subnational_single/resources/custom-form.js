var module1SubnationalId = "Humg4HbkmJg";

var calculatedNumericCells = [
    //Working Details

    //1 - Medical Doctors
    {
        id: "qcDKkL7Xkl4-Xr12mI7VPn3-val",
        children: [
            "mHFT8rZ6ksz-Xr12mI7VPn3-val",
            "qMdjQN91JDi-Xr12mI7VPn3-val",
            "ePgUyGHxJuI-Xr12mI7VPn3-val",
        ],
    },
    //2 - Nursing Personnel
    {
        id: "ok6yvzSABcU-Xr12mI7VPn3-val",
        children: [
            "Rnuo4SphAdV-Xr12mI7VPn3-val",
            "mHD3Efts57E-Xr12mI7VPn3-val",
            "T58TEnz6WgZ-Xr12mI7VPn3-val",
        ],
    },
    //3 - Midwifery personnel
    {
        id: "bDQt7HaZCu9-Xr12mI7VPn3-val",
        children: [
            "EqDGfdOIX9a-Xr12mI7VPn3-val",
            "rfqaKzMPEdf-Xr12mI7VPn3-val",
            "QC2yRZy5Fn7-Xr12mI7VPn3-val",
        ],
    },
];

function calculateNumericCell(inputId) {
    const items = inputId.split("-");
    items.shift();
    const noOrgUnitId = items.join("-");
    const organisationUnitId = inputId.split("-")[0];
    var total = 0;

    var calculateNumericCell = calculatedNumericCells.find(cell => {
        return cell.id == noOrgUnitId;
    });

    calculateNumericCell.children.forEach(childId => {
        const ouChildId = organisationUnitId + "-" + childId;

        var value = $("#" + ouChildId).val();

        if (value != "" && !isNaN(value)) {
            total = total + parseInt(value);
        }
    });

    $("#" + inputId).val(total);
    $("#" + inputId).trigger("change");
}

function onInputChange(id) {
    const organisationUnitId = id.split("-")[0];
    const dataElementId = id.split("-")[1];
    const optionComboId = id.split("-")[2];

    saveVal(dataElementId, optionComboId, id);

    calculatedNumericCells.forEach(calculatedNumericCell => {
        calculatedNumericCell.children.forEach(function (childId) {
            if (id === organisationUnitId + "-" + childId) {
                calculateNumericCell(organisationUnitId + "-" + calculatedNumericCell.id);
                return;
            }
        });
    });
}

function get_resource_link(element_id, tokens) {
    $.ajax({
        url: "../api/documents",
        type: "get",
        data: {
            fields: "id",
            filter: "name:token:" + tokens,
        },
        success: function (response) {
            id = response["documents"][0]["id"];
            document.getElementById(element_id).href = "../api/documents/" + id + "/data";
        },
        error: function (xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

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

function loadValues() {
    $(".read-only input").each(function () {
        $(this).attr("disabled", "disabled");
    });

    const $nextPageButton = document.querySelector(".pagination-next-orgUnitsTable");

    if ($nextPageButton) {
        $nextPageButton.addEventListener("click", function (e) {
            if (e.target.classList.contains("no-pag")) return;

            loadValues();
        });
    }

    const $previousPageButton = document.querySelector(".pagination-pre-orgUnitsTable");

    if ($previousPageButton) {
        $previousPageButton.addEventListener("click", function (e) {
            if (e.target.classList.contains("no-pag")) return;

            loadValues();
        });
    }

    var periodId = $("#selectedPeriodId").val();

    var params = {
        period: periodId,
        dataSet: module1SubnationalId,
        orgUnit: dhis2.de.getCurrentOrganisationUnit(),
        children: true,
    };

    $.ajax({
        url: "../api/dataValueSets",
        data: params,
        dataType: "json",
        success: json => {
            $.safeEach(json.dataValues, function (i, dataValue) {
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

            $("input[type=text]").on("change", function (e) {
                onInputChange(e.target.id);
            });
            $("textarea").on("change", function (e) {
                onInputChange(e.target.id);
            });
        },
        error: function (xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

function renderCustomForm() {
    $(".cde table tbody").empty();
    $("#custom-form-loader").show();

    const filter = `paging=false&var=dataSet:${module1SubnationalId}&var=orgUnit:${dhis2.de.currentOrganisationUnitId}`;

    $.ajax({
        url: `../api/sqlViews/F9WNm3XNjli/data?${filter}`,
        type: "get",
        success: function (response) {
            const orgUnits = response.listGrid.rows.map(row => ({
                orgUnitId: row[0],
                orgUnitName: row[1],
            }));

            var tableOptions = {
                data: orgUnits,
                pagination: 10,
                tableDiv: "#orgUnitsTable",
                templateID: "orgUnitsTable_template",
            };

            makeTable(tableOptions);

            $("#custom-form-loader").hide();

            loadValues();
        },
        error: function (xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

$(document).ready(function () {
    $(function () {
        $("#mod2_tabs").tabs();

        dhis2.util.on("dhis2.de.event.dataValuesLoaded", function (event, ds) {
            renderCustomForm();
        });
    });
    $(function () {
        console.log("Updating file resources links");
        get_resource_link("handbook_link", "NHWA, Indicator, HandBook");
        get_resource_link("userguide_link", "NHWA, User, guide");
        get_resource_link("occupation_link", "NHWA, Occupation, Mapping");
    });

    if ($("#currentSelection").length > 0) {
        $("#currentSelection").wrap('<div class="currentSelectionContainer"></div>');
    }
});
