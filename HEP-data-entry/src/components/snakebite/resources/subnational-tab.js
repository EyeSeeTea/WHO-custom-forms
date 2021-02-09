class SubnationalTab {
    orgUnits = [];
    pageSize = 10;

    constructor($tabContainer, subnationalDataSetId, selectedOrgUnitId) {
        this.subnationalDataSetId = subnationalDataSetId;
        this.$tabContainer = $tabContainer;
        this.tableConatinerId = `${subnationalDataSetId}_table`;
        this.selectedOrgUnitId = selectedOrgUnitId;
    }

    updateSubnationalDataElementTotals(orgUnitDataElementId) {
        this.$tabContainer.find('input[name="subnationalTotal"]').each(function() {
            const totalId = $(this).attr("subnationaltotalid");

            if (!orgUnitDataElementId || orgUnitDataElementId == totalId) {
                const total = dhis2.de.getDataElementTotalValue(totalId);

                $(this).val(total);
            }
        });
    }

    onSubnationalInputChange(id) {
        const organisationUnitId = id.split("-")[0];
        const dataElementId = id.split("-")[1];
        const optionComboId = id.split("-")[2];

        saveVal(dataElementId, optionComboId, id);
        this.updateSubnationalDataElementTotals(`${organisationUnitId}-${dataElementId}`);
    }

    onSubnationalTextAreaChange(id) {
        const dataElementId = id.split("-")[1];
        const optionComboId = id.split("-")[2];

        saveVal(dataElementId, optionComboId, id);
    }

    renamePageOrgUnitPaths(currentPage) {
        if (this.orgUnits.length === 0) {
            return Promise.resolve(this.orgUnits);
        } else {
            const orgUnitsToRender = () => [
                ...this.orgUnits.map(ou => ({
                    ...ou,
                    orgUnitPath: ou.orgUnitPath.replaceAll("/", " / "),
                })),
            ];

            const orgUnitIds = [
                ...new Set(
                    this.orgUnits
                        .slice(
                            currentPage * this.pageSize - this.pageSize,
                            currentPage * this.pageSize
                        )
                        .map(ou => ou.orgUnitPath.split("/"))
                        .flat()
                        .filter(uid => this.isValidUid(uid))
                ),
            ];

            if (orgUnitIds.length === 0) return Promise.resolve(orgUnitsToRender());

            return getOrgUnits(orgUnitIds).then(orgUnitNames => {
                this.orgUnits = this.orgUnits.map(ou => {
                    const ouPath = ou.orgUnitPath.split("/");
                    const ouPathNames = ouPath
                        .map(id => {
                            const orgUnit = orgUnitNames.organisationUnits.find(ou => ou.id === id);
                            return orgUnit ? orgUnit.shortName : id;
                        })
                        .join("/");

                    return { ...ou, orgUnitPath: ouPathNames };
                });

                return orgUnitsToRender();
            });
        }
    }

    loadSubnationalValues() {
        const $nextPageButton = document.querySelector(`.pagination-next-${this.tableConatinerId}`);

        if ($nextPageButton) {
            $nextPageButton.addEventListener("click", e => {
                if (e.target.classList.contains("no-pag")) return;

                this.loadSubnationalValues(this.subnationalDataSetId);
            });
        }

        const $previousPageButton = document.querySelector(
            `.pagination-pre-${this.tableConatinerId}`
        );

        if ($previousPageButton) {
            $previousPageButton.addEventListener("click", e => {
                if (e.target.classList.contains("no-pag")) return;

                this.loadSubnationalValues(this.subnationalDataSetId);
            });
        }

        const periodId = $("#selectedPeriodId").val();

        const params = {
            period: periodId,
            dataSet: this.subnationalDataSetId,
            orgUnit: selectedOrgUnitId,
            children: true,
        };

        $.ajax({
            url: "../api/dataValueSets",
            data: params,
            dataType: "json",
            success: json => {
                $.safeEach(json.dataValues, (i, dataValue) => {
                    const fieldId = `#${dataValue.orgUnit}-${dataValue.dataElement}-${dataValue.categoryOptionCombo}-val`;
                    if ($(fieldId).length > 0) {
                        const entryField = $(fieldId);
                        if ("true" == dataValue.value && entryField.attr("type") == "checkbox") {
                            $(fieldId).prop("checked", true);
                        } else {
                            $(fieldId).val(dataValue.value);
                        }
                    }
                });

                this.$tabContainer.find("#subnational input[type=text]").on("change", e => {
                    this.onSubnationalInputChange(e.target.id);
                });
                this.$tabContainer.find("#subnational textarea").on("change", e => {
                    this.onSubnationalTextAreaChange(e.target.id);
                });

                this.updateSubnationalDataElementTotals();
            },
            error: function(xhr) {
                console.log("Error in the request");
                console.log(xhr);
            },
        });
    }

    isValidUid(value) {
        const UID_PATTERN = /^[a-zA-Z]{1}[a-zA-Z0-9]{10}$/;

        return UID_PATTERN.test(value);
    }

    onLoadingPage(page) {
        return this.renamePageOrgUnitPaths(page);
    }

    onLoadedPage() {
        this.loadSubnationalValues(this.subnationalDataSetId);
    }

    render() {
        this.$tabContainer.find("#subnational .cde table tbody").empty();
        this.$tabContainer.find("#custom-form-loader").show();

        const filter = `paging=false&var=dataSet:${this.subnationalDataSetId}&var=orgUnit:${dhis2.de.currentOrganisationUnitId}`;

        $.ajax({
            url: `../api/sqlViews/F9WNm3XNjli/data?${filter}`,
            type: "get",
            success: response => {
                this.orgUnits = response.listGrid.rows.map(row => ({
                    orgUnitId: row[0],
                    orgUnitName: row[1],
                    orgUnitPath: row[2],
                }));

                if (this.orgUnits.length > 0) {
                    //TODO: move this to custom form
                    const tableOptions = {
                        data: this.orgUnits,
                        pagination: this.pageSize,
                        tableDiv: `#${this.tableConatinerId}`,
                        templateID: `${this.subnationalDataSetId}_template`,
                        onLoadingPage: page => this.onLoadingPage(page),
                        onLoadedPage: () => this.onLoadedPage(),
                    };

                    const sheetsee = new Sheetsee();

                    sheetsee.makeTable(tableOptions);

                    this.$tabContainer.find("#custom-form-loader").hide();
                } else {
                    const tabId = this.$tabContainer.attr("id");
                    $(`a[href="#${tabId}"]`)
                        .closest("li")
                        .hide();
                }
            },
            error: function(xhr) {
                console.log("Error in the request");
                console.log(xhr);
            },
        });
    }
}
