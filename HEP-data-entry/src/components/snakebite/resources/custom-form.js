var antivenomProducts = [];
var loadingAntivenomProductNames = false;
var isAdminUser = undefined;
var entryTableGroupsTemplate = [];
var addProductDialog;

/**
 * Data functions
 */

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

function removeDataValues(json) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../api/dataValueSets?strategy=DELETE",
            data: JSON.stringify(json),
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: response => {
                resolve(response);
            },
            error: function(xhr) {
                console.log("Error in the request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function getAntivenomProducts(includeDeleted) {
    return new Promise((resolve, reject) => {
        const namespace = $("#custom-form-script").attr("data-datastore-namespace");
        const key = $("#custom-form-script").attr("data-datastore-antivenomproducts-key");

        $.ajax({
            url: `../api/dataStore/${namespace}/${key}`,
            type: "get",
            success: json => {
                resolve(json.filter(p => includeDeleted || !p.deleted));
            },
            error: function(xhr) {
                console.log("Error in the get dataValueSets request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function saveAntivenomProduct(newProduct) {
    return new Promise((resolve, reject) => {
        const namespace = $("#custom-form-script").attr("data-datastore-namespace");
        const key = $("#custom-form-script").attr("data-datastore-antivenomproducts-key");

        getAntivenomProducts(true).then(products => {
            const newProducts = [...products, newProduct];

            $.ajax({
                url: `../api/dataStore/${namespace}/${key}`,
                data: JSON.stringify(newProducts),
                type: "PUT",
                dataType: "json",
                contentType: "application/json",
                success: response => {
                    resolve(response);
                },
                error: function(xhr) {
                    console.log("Error in the request");
                    console.log(xhr);
                    reject(xhr);
                },
            });
        });
    });
}

function removeAntivenomProduct(productName) {
    return new Promise((resolve, reject) => {
        const namespace = $("#custom-form-script").attr("data-datastore-namespace");
        const key = $("#custom-form-script").attr("data-datastore-antivenomproducts-key");

        getAntivenomProducts(true).then(products => {
            const newProducts = products.map(p =>
                p.productName === productName ? { ...p, deleted: true } : p
            );

            $.ajax({
                url: `../api/dataStore/${namespace}/${key}`,
                data: JSON.stringify(newProducts),
                type: "PUT",
                dataType: "json",
                contentType: "application/json",
                success: response => {
                    resolve(response);
                },
                error: function(xhr) {
                    console.log("Error in the request");
                    console.log(xhr);
                    reject(xhr);
                },
            });
        });
    });
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

function getCustomMetadata() {
    return new Promise((resolve, reject) => {
        const namespace = $("#custom-form-script").attr("data-datastore-namespace");
        const key = $("#custom-form-script").attr("data-datastore-custommetadata-key");

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

function getDataElement(dataElementId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url:
                "../api/dataElements/" +
                dataElementId +
                "?fields=id,name,categoryCombo[id,categoryOptionCombos[id,name]]",
            type: "get",
            dataType: "json",
            success: json => {
                resolve(json);
            },
            error: function(xhr) {
                console.log("Error in the get getDataElement request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function getMe() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../api/me?fields=id,name,userGroups",
            type: "get",
            dataType: "json",
            success: json => {
                resolve(json);
            },
            error: function(xhr) {
                console.log("Error in the get getDataElement request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

/**
 * Subnational tab
 */

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

/**
 * Antivenom products
 */

async function removeAntivenomDataValues($tr) {
    $tr.find("td").each(function() {
        const type = this.getAttribute("data-type");

        if (type && type === "radio") {
            $(this)
                .find(`input:nth(0)`)
                .prop("checked", false);

            $(this)
                .find(`input:nth(1)`)
                .prop("checked", false);
        } else if (type && type === "text") {
            $(this)
                .find(`input[id*=-val]`)
                .val("")
                .trigger("change");
        }
    });

    //Manually delete via api because some data values (Boolean ) are not removed
    const idToRemove = [];

    valueIdsToRemove = $tr.find("input[id*=-val]").each(function() {
        idToRemove.push($(this).attr("id"));
    });

    const json = await getCurrentDataSetDataValues();

    if (json.dataValues) {
        const jsontoDelete = {
            ...json,
            dataValues: json.dataValues.filter(dv => {
                const inputId = `${dv.dataElement}-${dv.categoryOptionCombo}-val`;

                return idToRemove.includes(inputId);
            }),
        };

        await removeDataValues(jsontoDelete);
    }
}

function assignAntivenomDataValuesByProduct($tr, antivenomProduct) {
    $tr.find("td").each(function() {
        const markRadioInput = index => {
            $(this)
                .find(`input:nth(${index})`)
                .prop("checked", true)
                .trigger("click");

            $(this)
                .find(`input:nth(${index})`)
                .addClass("checked");
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
                .trigger("change");
        }
    });
}

function assignAntivenomDataValue(dataValue) {
    const fieldId = `#${dataValue.dataElement}-${dataValue.categoryOptionCombo}-val`;
    const entryField = $(fieldId);

    if (entryField.hasClass("entryselect")) {
        var fId = fieldId.substring(1, fieldId.length);

        if (dataValue.value == "true") {
            $("input[id=" + fId + "]:nth(0)").prop("checked", true);
            $("input[id=" + fId + "]:nth(0)").addClass("checked");
        } else if (dataValue.value == "false") {
            $("input[id=" + fId + "]:nth(1)").prop("checked", true);
            $("input[id=" + fId + "]:nth(1)").addClass("checked");
        } else {
            $("input[id=" + fId + "]:nth(0)").prop("checked", false);
            $("input[id=" + fId + "]:nth(1)").prop("checked", false);
        }
    } else {
        $(fieldId).val(dataValue.value);
    }
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

function disableTrInputs($tr, value) {
    $tr.find(`input[id*=-val]`).each(function() {
        $(this).prop("disabled", value);
        $(this).css("background-color", value === true ? "#eeeeee" : "#ffffff");
    });
}

async function onChangeAntivenomProduct() {
    debugger;
    const val = $(this).select2("val");

    const antivenomProduct = antivenomProducts.find(product => product.productName === val);

    const $tr = $(this).closest("tr");

    if (val === "") {
        await removeAntivenomDataValues($tr);
        disableTrInputs($tr, true);
    } else if (antivenomProduct) {
        if (!loadingAntivenomProductNames) {
            await removeAntivenomDataValues($tr);
        }
        renameCategoryOptionCombosInInputIds($tr, antivenomProduct.categoryOptionComboId);
        disableTrInputs($tr, false);

        if (!loadingAntivenomProductNames) {
            assignAntivenomDataValuesByProduct($tr, antivenomProduct);
        }
    } else {
        console.log("An error has ocurred finding selected product in product list");
    }
}

async function selectAntivenomProductNames(recommended) {
    const antivenomEntries = await getAntivenomEntries();

    const productNameDEEntry = antivenomEntries.groups
        .map(g => g.dataElements)
        .flat()
        .find(de => de.recommendedProductsSelector === recommended);

    const groupId = antivenomEntries.groups.find(g =>
        g.dataElements.some(de => de.id === productNameDEEntry.id)
    ).id;

    const dataValuesResponse = await getCurrentDataSetDataValues();

    if (dataValuesResponse.dataValues) {
        const productNameDataValues = dataValuesResponse.dataValues.filter(
            dv =>
                (productNameDEEntry.id === dv.dataElement && recommended) ||
                (productNameDEEntry.id === dv.dataElement && !recommended)
        );

        loadingAntivenomProductNames = true;

        const getDataValue = (dataElement, categoryOptionCombo) => {
            return dataValuesResponse.dataValues.find(
                dv =>
                    dv.dataElement === dataElement && dv.categoryOptionCombo === categoryOptionCombo
            );
        };

        if (productNameDataValues.length > 1) {
            for (var i = 1; i <= productNameDataValues.length - 1; i++) {
                await addEntryFieldsTableToGroup($(`div[id='${groupId}-group']`));
            }
        }

        if (productNameDataValues.length > 0) {
            //Disable dhis2 listeners
            $(".entryfield, .entryselect").off("change");

            for (const productNameDataValue of productNameDataValues) {
                const index = productNameDataValues.indexOf(productNameDataValue);

                // if (index > 0) {
                //     await addEntryFieldsTableToGroup($(`div[id='${groupId}-group']`));
                // }

                const selector = recommended
                    ? `input.antivenom-recommended-products:eq(${index})`
                    : `input.antivenom-non-recommended-products:eq(${index})`;

                const $select = $(selector)
                    .val(productNameDataValue.value)
                    .trigger("change");

                $select
                    .closest("tr")
                    .find("td input[id*=-val]")
                    .each(function() {
                        const idParts = $(this)
                            .attr("id")
                            .split("-");
                        const dataElement = idParts[0];
                        const categoryOptionCombo = idParts[1];

                        const dataValue = getDataValue(dataElement, categoryOptionCombo);

                        if (dataValue) {
                            assignAntivenomDataValue(dataValue);
                        }
                    });
            }

            //Enable dhis2 listeners
            dhis2.de.addEventListeners();
        }
    }

    loadingAntivenomProductNames = false;
}

function addAntivenomProductsSelectListeners() {
    $(".antivenom-products").off("change");
    $(".antivenom-products").on("change", onChangeAntivenomProduct);

    $(".antivenom-products").each(function() {
        const select2 = $(this).data("select2");

        const $self = $(this);

        select2.onSelect = (function(fn) {
            return function(data, options) {
                var target;

                if (options != null) {
                    target = $(options.target);
                }

                const productName = data.id;

                if (target && target.hasClass("remove-product")) {
                    if (
                        confirm(
                            "Are you sure to delete the product? The related inserted data values will be visible in the analytics but never again from the data entry application."
                        )
                    ) {
                        removeAntivenomProduct(productName).then(() => location.reload());
                    }
                } else {
                    const className = $self.hasClass("antivenom-recommended-products")
                        ? "input.antivenom-recommended-products"
                        : "input.antivenom-non-recommended-products";

                    var currentValues = [];

                    $(className).each(function() {
                        currentValues.push($(this).val());
                    });

                    if (
                        productName !== $self.select2("val") &&
                        currentValues.includes(productName)
                    ) {
                        alert(
                            `The product ${productName} has already been selected,  please select another`
                        );
                    } else {
                        return fn.apply(this, arguments);
                    }
                }
            };
        })(select2.onSelect);
    });
}

async function loadAntivenomProductSelects() {
    antivenomProducts = await getAntivenomProducts();

    const getSelectItems = recommended => {
        return antivenomProducts
            .filter(product => product.recommended === recommended)
            .sort(function(a, b) {
                if (a.productName < b.productName) {
                    return -1;
                }
                if (a.productName > b.productName) {
                    return 1;
                }
                return 0;
            })
            .map(product => ({
                id: product.productName,
                text: product.productName,
            }));
    };

    const recommendedProducts = getSelectItems(true);
    const nonRecommendedProducts = getSelectItems(false);

    function formatState(state) {
        if (isAdminUser) {
            return $(
                `<span style="cursor: default;"> ${state.text}</span>` +
                    `<i class="fa fa-trash remove-product" style="margin-left:24px;font-size:16px;cursor: pointer;"/i>`
            );
        } else {
            return $(`<span style="cursor: default;"> ${state.text}</span>`);
        }
    }

    const params = {
        placeholder: "Select a product",
        allowClear: true,
        dropdownAutoWidth: true,
        formatResult: formatState,
    };

    $(".antivenom-recommended-products")
        .select2({ ...params, data: recommendedProducts })
        .data("select2");

    $(".antivenom-non-recommended-products")
        .select2({ ...params, data: nonRecommendedProducts })
        .data("select2");

    addAntivenomProductsSelectListeners();
}

async function initializeByAdminUser($container) {
    if (isAdminUser) {
        $container.find('.create-antivenom-product[data-recommended="true"]').show();
    } else {
        $container.find('.create-antivenom-product[data-recommended="true"]').hide();
    }

    $container.find(`input:disabled`).each(function() {
        $(this).css("background-color", "#eeeeee");
    });

    $container
        .find(".create-antivenom-product")
        .button()
        .on("click", async function() {
            const dataElementId = $(this).data("dataelement");
            const dataElement = await getDataElement(dataElementId);
            antivenomProducts = await getAntivenomProducts(true);

            const freeCategoryOptions = dataElement.categoryCombo.categoryOptionCombos.filter(
                comboOption =>
                    !antivenomProducts.some(aprod => aprod.categoryOptionComboId === comboOption.id)
            );

            const recommended = $(this).data("recommended");

            const productType = recommended ? "recommended" : "non recomended";

            if (freeCategoryOptions.length === 0) {
                alert(
                    `It is not possible to create a new ${productType} product. The maximum number of ${productType} products has been reached. Please contact your administrator.`
                );
            } else {
                $("input[name=recommended]").prop("checked", recommended);
                addProductDialog
                    .data("categoryOptionCombo", freeCategoryOptions[0].id)
                    .dialog("open");
            }
        });
}

async function addEntryFieldsTableToGroup($group) {
    const template = $group.find(".table-template")[0];

    const entryTemplate = document.importNode(template.content, true);

    const $entryTemplate = $(entryTemplate);

    await initializeByAdminUser($entryTemplate);

    $group.find(".add-entry-fields").before($entryTemplate);

    //TODO: optimize to load only antivenom product select in new table
    await loadAntivenomProductSelects();

    //Fix multiple listeners with year changes
    $(".remove-entry-fields").off("click");
    $(".remove-entry-fields").on("click", function(e) {
        e.preventDefault();

        const $container = $(this).closest(".antivenom-table-container");

        const $tr = $container.find("table tr");

        removeAntivenomDataValues($tr);

        $container.remove();
    });
}

function initializeAntivenomEntryFields() {
    $(".antivenom-table-container").remove();

    $(`div[id*=-group]`).each(function() {
        addEntryFieldsTableToGroup($(this));
    });

    $(".add-entry-fields").off("click");
    $(".add-entry-fields").on("click", function(e) {
        e.preventDefault();
        const $group = $(this).closest("div[id*=-group]");

        addEntryFieldsTableToGroup($group);
    });
}

/**
 * Add product form
 */

function resetFormMessage() {
    $("input[name=productName]").removeClass("ui-state-error");
    $("#form-message")
        .text("")
        .removeClass("ui-state-highlight");
}

async function addAntivenomProduct(categoryOptionComboId) {
    const $productName = $("input[name=productName]");
    const $manufacturerName = $("input[name=manufacturerName]");
    const $polyvalent = $("input[name=polyvalent]:checked");
    const $monovalent = $("input[name=monovalent]:checked");
    const $recommended = $("input[name=recommended]");
    const $formMessage = $("#form-message");

    $productName.change(resetFormMessage);

    const product = {
        productName: $productName.val(),
        manufacturerName: $manufacturerName.val(),
        polyvalent: $polyvalent.val() == "true",
        monovalent: $monovalent.val() == "true",
        recommended: $recommended.prop("checked"),
        categoryOptionComboId,
    };

    if (product.productName.trim().length === 0) {
        $productName.addClass("ui-state-error");
        $formMessage.text("Product Name is a required field").addClass("ui-state-highlight");
        return false;
    } else {
        await saveAntivenomProduct(product);
        return true;
    }
}

function initializeAddProductDialog() {
    addProductDialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 375,
        width: 350,
        modal: true,
        title: "Create Product",
        buttons: {
            Create: function() {
                var categoryOptionComboId = $("#dialog-form").data("categoryOptionCombo");

                addAntivenomProduct(categoryOptionComboId).then(result => {
                    if (result) {
                        loadAntivenomProductSelects();
                        addProductDialog.dialog("close");
                    }
                });
            },
            Cancel: function() {
                addProductDialog.dialog("close");
            },
        },
        close: function() {
            addProductDialog.find("form")[0].reset();
            resetFormMessage();
        },
    });
}

/**
 * Load user admin
 */

async function loadIfUserIsAdmin() {
    const customMetadata = await getCustomMetadata();
    const me = await getMe();

    const isAdmin = (customMetadata, me) => {
        return me.userGroups
            ? me.userGroups.some(group => customMetadata.adminUserGroups.includes(group.id))
            : true;
    };

    isAdminUser = isAdmin(customMetadata, me);
}

/**
 * Init function
 */

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
