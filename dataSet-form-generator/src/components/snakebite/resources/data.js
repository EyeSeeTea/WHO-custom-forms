var antivenomProducts = [];

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
            error: function (xhr) {
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
            error: function (xhr) {
                console.log("Error in the request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function getAntivenomProducts(includeDeleted) {
    return new Promise((resolve, reject) => {
        const namespace = $("#data-script").attr("data-datastore-namespace");
        const key = $("#data-script").attr("data-datastore-antivenomproducts-key");

        $.ajax({
            url: `../api/dataStore/${namespace}/${key}`,
            type: "get",
            success: json => {
                resolve(json.filter(p => includeDeleted || !p.deleted));
            },
            error: function (xhr) {
                console.log("Error in the get dataValueSets request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

async function getAntivenomProductsGroupByRecommended() {
    antivenomProducts = await getAntivenomProducts();

    const getSelectItems = recommended => {
        return antivenomProducts
            .filter(product => product.recommended === recommended)
            .sort(function (a, b) {
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

    return { recommended: getSelectItems(true), nonRecommended: getSelectItems(false) };
}

function saveAntivenomProduct(newProduct) {
    return new Promise((resolve, reject) => {
        const namespace = $("#data-script").attr("data-datastore-namespace");
        const key = $("#data-script").attr("data-datastore-antivenomproducts-key");

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
                error: function (xhr) {
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
        const namespace = $("#data-script").attr("data-datastore-namespace");
        const key = $("#data-script").attr("data-datastore-antivenomproducts-key");

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
                error: function (xhr) {
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
        const namespace = $("#data-script").attr("data-datastore-namespace");
        const key = $("#data-script").attr("data-datastore-antivenomentries-key");

        $.ajax({
            url: `../api/dataStore/${namespace}/${key}`,
            type: "get",
            success: json => {
                resolve(json);
            },
            error: function (xhr) {
                console.log("Error in the get dataValueSets request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function getCustomMetadata() {
    return new Promise((resolve, reject) => {
        const namespace = $("#data-script").attr("data-datastore-namespace");
        const key = $("#data-script").attr("data-datastore-custommetadata-key");

        $.ajax({
            url: `../api/dataStore/${namespace}/${key}`,
            type: "get",
            success: json => {
                resolve(json);
            },
            error: function (xhr) {
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
            error: function (xhr) {
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
            error: function (xhr) {
                console.log("Error in the get getDataElement request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}

function getOrgUnits(ids) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `../api/organisationUnits?fields=id,shortName&filter=id:in:[${ids.join(",")}]`,
            type: "get",
            dataType: "json",
            success: json => {
                resolve(json);
            },
            error: function (xhr) {
                console.log("Error in the get getDataElement request");
                console.log(xhr);
                reject(xhr);
            },
        });
    });
}
