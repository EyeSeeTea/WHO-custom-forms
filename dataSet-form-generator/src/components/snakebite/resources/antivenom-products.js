var loadingAntivenomProductNames = false;
var entryTableGroupsTemplate = [];
var addProductDialog;
var isAdminUser = undefined;

async function removeAntivenomDataValues($tr) {
    $tr.find("td").each(function () {
        const type = this.getAttribute("data-type");

        if (type && type === "radio") {
            //Click on ckeched and dhis2 uncheck and remove
            $(this)
                .find("input:checked")
                .trigger("click") // this remove data value by dhis2
                .prop("checked", false);
        } else if (type && type === "text") {
            $(this)
                .find(`input[id*=-val]`)
                .val("") // this remove data value by dhis2
                .trigger("change");
        }
    });

    //Manually delete via api because some data values are not removed sometimes
    const idToRemove = [];

    valueIdsToRemove = $tr.find("input[id*=-val]").each(function () {
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
    $tr.find("td").each(function () {
        const markRadioInput = index => {
            if (loadingAntivenomProductNames) {
                $(this)
                    .find(`input:nth(${index})`)
                    .prop("checked", true)
                    .addClass("checked")
                    .trigger("click");
            } else {
                //Only click  and dhis2 assign checked and class
                $(this).find(`input:nth(${index})`).trigger("click");
            }
        };

        const prop = this.getAttribute("data-prop");
        const type = this.getAttribute("data-type");

        if (prop && type && type === "radio") {
            if (antivenomProduct[prop] === true) {
                markRadioInput(0);
                $(this).find(`input`).prop("disabled", true);
            } else if (antivenomProduct[prop] === false) {
                markRadioInput(1);
                $(this).find(`input`).prop("disabled", true);
            }
        } else if (prop && type && type === "text" && antivenomProduct[prop]) {
            $(this)
                .find(`input[id*=-val]`)
                .val(antivenomProduct[prop])
                .trigger("change")
                .prop("disabled", true);
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
        $tr.find(`input[${att}*=-val]`).each(function () {
            const dataElementId = $(this).attr(att).split("-")[0];
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
    $tr.find(`input[id*=-val]`).each(function () {
        $(this).prop("disabled", value);
        $(this).css("background-color", value === true ? "#eeeeee" : "#ffffff");
    });
}

async function onChangeAntivenomProduct(ev) {
    const val = $(this).select2("val");

    const antivenomProduct = antivenomProducts.find(product => product.productName === val);

    const $tr = $(this).closest("tr");

    if (val === "") {
        await removeAntivenomDataValues($tr);
        disableTrInputs($tr, true);
    } else if (antivenomProduct) {
        if (!loadingAntivenomProductNames && ev && ev.removed && ev.removed != val) {
            await removeAntivenomDataValues($tr);
        }
        renameCategoryOptionCombosInInputIds($tr, antivenomProduct.categoryOptionComboId);
        disableTrInputs($tr, false);

        if (!loadingAntivenomProductNames) {
            assignAntivenomDataValuesByProduct($tr, antivenomProduct);
        }

        convertMonovalentPolyvalentToExclusive($tr);
    } else {
        console.log("An error has ocurred finding selected product in product list");
    }
}

async function selectAntivenomProductNames(recommended) {
    const antivenomEntries = await getAntivenomEntries();
    const antivenomProducts = await getAntivenomProducts();

    const productNameDEEntry = antivenomEntries.groups
        .map(g => g.dataElements)
        .flat()
        .find(de => de.recommendedProductsSelector === recommended);

    const groupId = antivenomEntries.groups.find(g =>
        g.dataElements.some(de => de.id === productNameDEEntry.id)
    ).id;

    const dataValuesResponse = await getCurrentDataSetDataValues();

    if (dataValuesResponse.dataValues) {
        const existsAntivenomProductName = productName =>
            antivenomProducts.some(p => p.productName === productName);

        const productNameDataValues = dataValuesResponse.dataValues
            .filter(
                dv =>
                    ((productNameDEEntry.id === dv.dataElement && recommended) ||
                        (productNameDEEntry.id === dv.dataElement && !recommended)) &&
                    existsAntivenomProductName(dv.value)
            )
            .sort(function (a, b) {
                return new Date(a.created) - new Date(b.created);
            });

        loadingAntivenomProductNames = true;

        const getDataValue = (dataElement, categoryOptionCombo) => {
            return dataValuesResponse.dataValues.find(
                dv =>
                    dv.dataElement === dataElement && dv.categoryOptionCombo === categoryOptionCombo
            );
        };

        if (productNameDataValues.length > 0) {
            //Disable dhis2 listeners
            $(".entryfield, .entryselect").off("change");

            for (const productNameDataValue of productNameDataValues) {
                const index = productNameDataValues.indexOf(productNameDataValue);

                if (index > 0) {
                    await addEntryFieldsTableToGroup($(`div[id='${groupId}-group']`));
                }

                const selector = recommended
                    ? `input.antivenom-recommended-products:eq(${index})`
                    : `input.antivenom-non-recommended-products:eq(${index})`;

                const $select = $(selector)
                    .select2("val", productNameDataValue.value)
                    .trigger("change");

                $select
                    .closest("tr")
                    .find("td input[id*=-val]")
                    .each(function () {
                        const idParts = $(this).attr("id").split("-");
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

function addAntivenomProductsSelectListeners($selects) {
    $selects.off("change");
    $selects.on("change", onChangeAntivenomProduct);

    $selects.each(function () {
        const select2 = $(this).data("select2");

        const $self = $(this);

        select2.onSelect = (function (fn) {
            return function (data, options) {
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
                        removeAntivenomProduct(productName).then(() =>
                            initializeAndSelectAntivenomEntryFields()
                        );
                    }
                } else {
                    const className = $self.hasClass("antivenom-recommended-products")
                        ? "input.antivenom-recommended-products"
                        : "input.antivenom-non-recommended-products";

                    var currentValues = [];

                    $(className).each(function () {
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

function initSelects($selects, data) {
    const params = {
        placeholder: "Select a product",
        allowClear: true,
        dropdownAutoWidth: true,
        formatResult: function formatState(state) {
            if (isAdminUser) {
                return $(
                    `<span style="cursor: default;"> ${state.text}</span>` +
                        `<i class="fa fa-trash remove-product" style="margin-left:24px;font-size:16px;cursor: pointer;"/i>`
                );
            } else {
                return $(`<span style="cursor: default;"> ${state.text}</span>`);
            }
        },
    };

    $selects.select2({ ...params, data }).data("select2");

    addAntivenomProductsSelectListeners($selects);
}

async function loadAllAntivenomProductSelects() {
    const products = await getAntivenomProductsGroupByRecommended();

    initSelects($(".antivenom-recommended-products"), products.recommended);
    initSelects($(".antivenom-non-recommended-products"), products.nonRecommended);
}

async function loadAntivenomProductSelects($select) {
    const products = await getAntivenomProductsGroupByRecommended();

    const recommended = $select.hasClass("antivenom-recommended-products");

    initSelects($select, recommended ? products.recommended : products.nonRecommended);
}

async function initializeByAdminUser($container) {
    if (isAdminUser) {
        $container.find('.create-antivenom-product[data-recommended="true"]').show();
    } else {
        $container.find('.create-antivenom-product[data-recommended="true"]').hide();
    }

    $container.find(`input:disabled`).each(function () {
        $(this).css("background-color", "#eeeeee");
    });

    $container
        .find(".create-antivenom-product")
        .button()
        .on("click", async function () {
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

function convertMonovalentPolyvalentToExclusive($tr) {
    $tr.find("input[type=radio]").off("mouseup");
    $tr.find("input[type=radio]").on("mouseup", function (e) {
        if (!loadingAntivenomProductNames) {
            const id = $(this).attr("id");
            const value = $(this).val();

            //This is for dhis2 code
            //Avoid uncheck a radio button
            $(this).removeClass("checked");

            $(this)
                .closest("tr")
                .find("input[type=radio]")
                .each(function () {
                    const opposedValue = value === "true" ? "false" : "true";

                    if ($(this).attr("id") !== id && opposedValue === $(this).val()) {
                        $(this).prop("checked", true);
                        $(this).addClass("checked");

                        var opposedId = $(this).attr("id");
                        var split = dhis2.de.splitFieldId(opposedId);

                        var dataElementId = split.dataElementId;
                        var optionComboId = split.optionComboId;
                        saveBoolean(dataElementId, optionComboId, opposedId);
                    }
                });
        }
    });
}

async function addEntryFieldsTableToGroup($group) {
    const template = $group.find(".table-template")[0];

    const entryTemplate = document.importNode(template.content, true);

    const $entryTemplate = $(entryTemplate);

    await initializeByAdminUser($entryTemplate);

    await loadAntivenomProductSelects($entryTemplate.find(".antivenom-products"));

    $group.find(".add-entry-fields").before($entryTemplate);

    //Fix multiple listeners with year changes
    $(".remove-entry-fields").off("click");
    $(".remove-entry-fields").on("click", function (e) {
        e.preventDefault();
        if (confirm("Are you sure? This will delete the reported value for the deleted row")) {
            const $container = $(this).closest(".antivenom-table-container");

            const $tr = $container.find("table tr");

            removeAntivenomDataValues($tr);

            $container.remove();
        }
    });
}

function initializeAntivenomEntryFields() {
    $(".antivenom-table-container").remove();

    $(`div[id*=-group]`).each(function () {
        addEntryFieldsTableToGroup($(this));
    });

    $(".add-entry-fields").off("click");
    $(".add-entry-fields").on("click", function (e) {
        e.preventDefault();
        const $group = $(this).closest("div[id*=-group]");

        addEntryFieldsTableToGroup($group);
    });
}

/**
 * Add product form
 */

function convertMonovalentPolyvalentFormToExclusive() {
    $("#dialog-form input[type=radio]").off("click");
    $("#dialog-form input[type=radio]").on("click", function (e) {
        const name = $(this).attr("name");
        const value = $(this).val();
        $(this)
            .closest("form")
            .find("input[type=radio]")
            .each(function () {
                const opposedValue = value === "true" ? "false" : "true";

                if ($(this).attr("name") !== name && opposedValue === $(this).val()) {
                    $(this).prop("checked", true);
                }
            });
    });
}

function resetFormMessage() {
    $("input[name=productName]").removeClass("ui-state-error");
    $("#form-message").text("").removeClass("ui-state-highlight");
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
    convertMonovalentPolyvalentFormToExclusive();
    addProductDialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 375,
        width: 350,
        modal: true,
        title: "Create Product",
        buttons: {
            Create: function () {
                var categoryOptionComboId = $("#dialog-form").data("categoryOptionCombo");

                addAntivenomProduct(categoryOptionComboId).then(result => {
                    if (result) {
                        loadAllAntivenomProductSelects();
                        addProductDialog.dialog("close");
                    }
                });
            },
            Cancel: function () {
                addProductDialog.dialog("close");
            },
        },
        close: function () {
            addProductDialog.find("form")[0].reset();
            resetFormMessage();
        },
    });
}

/**
 * User admin
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
