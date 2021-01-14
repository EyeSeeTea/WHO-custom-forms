var antivenomProducts = [];
var loadingAntivenomProductNames = false;

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

function getCurrentDataSetDataValues() {
    return new Promise((resolve, reject) => {
        var params = {
            period: $("#selectedPeriodId").val(),
            dataSet: dhis2.de.currentDataSetId,
            orgUnit: dhis2.de.getCurrentOrganisationUnit(),
        };

        $.ajax({
            url: "../api/dataValueSets",
            data: params,
            dataType: "json",
            success: json => {
                resolve(json);
            },
            error: function(xhr) {
                console.log("Error in the get dataValueSets request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function removeAntivenomDataValues($tr) {
    $tr.find("td").each(function() {
        const type = this.getAttribute("data-type");

        if (type && type === "radio") {
            $(this)
                .find(`input:nth(0)`)
                .prop("checked", false)
                .attr("disabled", true);

            $(this)
                .find(`input:nth(1)`)
                .prop("checked", false)
                .attr("disabled", true);
        } else if (type && type === "text") {
            $(this)
                .find(`input[id*=-val]`)
                .val("")
                .trigger("change")
                .attr("disabled", true);
        }
    });

    //Manually delete via api because some data values (Boolean ) are not removed
    const idToRemove = [];

    valueIdsToRemove = $tr.find("input[id*=-val]").each(function() {
        idToRemove.push($(this).attr("id"));
    });

    getCurrentDataSetDataValues().then(json => {
        const jsontoDelete = {
            ...json,
            dataValues: json.dataValues.filter(dv => {
                const inputId = `${dv.dataElement}-${dv.categoryOptionCombo}-val`;

                return idToRemove.includes(inputId);
            }),
        };

        $.ajax({
            url: "../api/dataValueSets?strategy=DELETE",
            data: JSON.stringify(jsontoDelete),
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: response => {
                console.log({ response });
            },
            error: function(xhr) {
                console.log("Error in the request");
                console.log(xhr);
            },
        });
    });
}

function assignAntivenomDataValues($tr, antivenomProduct) {
    $tr.find("td").each(function() {
        const markRadioInput = index => {
            $(this)
                .find(`input:nth(${index})`)
                .prop("checked", true)
                .trigger("click");

            $(this)
                .find(`input:nth(${index})`)
                .addClass("checked");

            $(this)
                .find(`input:nth(0)`)
                .attr("disabled", false);

            $(this)
                .find(`input:nth(1)`)
                .attr("disabled", false);
        };

        const prop = this.getAttribute("data-prop");
        const type = this.getAttribute("data-type");

        if (prop && type && type === "radio") {
            if (antivenomProduct[prop] === true) {
                markRadioInput(0);
            } else if (antivenomProduct[prop] === false) {
                markRadioInput(1);
            }
        } else if (prop && type && type === "text" && antivenomProduct[prop]) {
            $(this)
                .find(`input[id*=-val]`)
                .val(antivenomProduct[prop])
                .attr("disabled", false)
                .trigger("change");
        }
    });
}
function renameCategoryOptionCombosInInputIds($tr, categoryOptionComboId) {
    const renameValAttribute = att => {
        $tr.find(`input[${att}*=-val]`).each(function() {
            const dataElementId = $(this)
                .attr(att)
                .split("-")[0];
            $(this).attr(att, `${dataElementId}-${categoryOptionComboId}-val`);
        });
    };

    renameValAttribute("id");
    renameValAttribute("name");

    //Refresh listeners to save data values becuase when listeners is created DE,
    //catOptionCombo etc.. are saved locally
    dhis2.de.addEventListeners();
}

function onChangeAntivenomProduct(e) {
    const id = e.currentTarget.id;

    const antivenomProduct = antivenomProducts.find(product => product.productName === e.val);

    if (e.val === "") {
        removeAntivenomDataValues($(`#${id}`).closest("tr"));
    } else if (antivenomProduct) {
        debugger;
        removeAntivenomDataValues($(`#${id}`).closest("tr"));
        renameCategoryOptionCombosInInputIds(
            $(`#${id}`).closest("tr"),
            antivenomProduct.categoryOptionComboId
        );

        if (!loadingAntivenomProductNames) {
            assignAntivenomDataValues($(`#${id}`).closest("tr"), antivenomProduct);
        }
    } else {
        console.log("An error has ocurred finding selected product in product list");
    }
}

function getAntivenomEntries() {
    return new Promise((resolve, reject) => {
        const namespace = $("#custom-form-script").attr("data-datastore-namespace");
        const key = $("#custom-form-script").attr("data-datastore-antivenomentries-key");

        $.ajax({
            url: `../api/dataStore/${namespace}/${key}`,
            type: "get",
            success: json => {
                resolve(json);
            },
            error: function(xhr) {
                console.log("Error in the get dataValueSets request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

async function selectAntivenomProductNames() {
    debugger;
    const antivenomEntries = await getAntivenomEntries();

    const recommendedProductNameDEEntry = antivenomEntries.groups
        .map(g => g.dataElements)
        .flat()
        .find(de => de.recommendedProductsSelector === true);

    const nonRecommendedProductNameDEEntry = antivenomEntries.groups
        .map(g => g.dataElements)
        .flat()
        .find(de => de.recommendedProductsSelector === false);

    const dataValuesResponse = await getCurrentDataSetDataValues();

    debugger;
    //TODO: refactor maybe many selectors by recommended type
    //TODO: show hidden antivenom tables tables
    const recommendedProductNameDataValues = dataValuesResponse.dataValues.filter(
        dv => recommendedProductNameDEEntry.id === dv.dataElement
    );
    const nonRecommendedProductNameDataValues = dataValuesResponse.dataValues.filter(
        dv => nonRecommendedProductNameDEEntry.id === dv.dataElement
    );

    debugger;

    loadingAntivenomProductNames = true;

    if (recommendedProductNameDataValues.length > 0) {
        $(".antivenom-recommended-products").val(recommendedProductNameDataValues[0].value);
        $(".antivenom-recommended-products").trigger("change");

        //TODO assign row data values
    }

    if (nonRecommendedProductNameDataValues.length > 0) {
        $(".antivenom-non-recommended-products").val(nonRecommendedProductNameDataValues[0].value);
        $(".antivenom-non-recommended-products").trigger("change");
    }

    loadingAntivenomProductNames = false;

    debugger;
}

function loadAntivenomProductSelects() {
    const namespace = $("#custom-form-script").attr("data-datastore-namespace");
    const key = $("#custom-form-script").attr("data-datastore-antivenomproducts-key");

    $.ajax({
        url: `../api/dataStore/${namespace}/${key}`,
        type: "get",
        success: function(products) {
            antivenomProducts = products;

            const getSelectItems = recommended => {
                return products
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

            $(".antivenom-products").on("change", onChangeAntivenomProduct);
        },
        error: function(xhr) {
            console.log("Error in the request");
            console.log(xhr);
        },
    });
}

$(document).ready(function() {
    debugger;
    $(function() {
        $("#tabs").tabs({ active: 0 });
    });

    renderSubnationalTab();
    loadAntivenomProductSelects();
    selectAntivenomProductNames();
});
