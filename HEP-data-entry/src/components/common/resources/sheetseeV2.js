// **** sheetsee-tables ****
// https://github.com/jlord/sheetsee-tables/blob/master/index.js
// I have not found a cdn to download by scrript link
// I try https://cdn.rawgit.com/jlord/sheetsee.js/master/js/sheetsee.js but fail sometimes
class Sheetsee {
    tblOpts = {};

    // Only called the very first time
    makeTable(data) {
        this.tblOpts = data;
        this.tblOpts.sortMeta = {};
        this.tblOpts.pgnMta = {};

        if (!this.tblOpts.templateID) {
            this.tblOpts.templateID = this.tblOpts.tableDiv.replace("#", "") + "_template";
        }

        this.buildPaginationMeta(data.data, data.pagination);

        this.prepTable();
        this.initiateTableSorter();
    }

    // SORTING

    // Called once to listen for clicks on table headers
    initiateTableSorter() {
        document.body.addEventListener("click", function(event) {
            if (event.target.classList.contains("tHeader")) {
                perpareSort(event);
            }
        });
    }

    // Prepare to be sorted
    perpareSort(event) {
        if (!this.tblOpts.sortMeta.sorted || this.tblOpts.sortMeta.sorted === "descending") {
            this.tblOpts.sortMeta.sorted = "ascending";
        } else if (this.tblOpts.sortMeta.sorted === "ascending")
            this.tblOpts.sortMeta.sorted = "descending";
        // TODO maybe make all keys in data lowercase...
        this.tblOpts.sortMeta.sortBy = event.target.innerHTML.replace(/\s/g, "").replace(/\W/g, "");
        this.tblOpts.tableDiv = "#" + event.target.closest("div").getAttribute("id");
        this.sortData();
    }

    // Sort the data
    sortData() {
        let sortGroup;
        if (this.tblOpts.filtering) sortGroup = this.tblOpts.pgnMta.allRows;
        else sortGroup = this.tblOpts.data;

        sortGroup.sort(function(a, b) {
            const aa = a[this.tblOpts.sortMeta.sortBy].toLowerCase();
            const bb = b[this.tblOpts.sortMeta.sortBy].toLowerCase();
            aa = aa.match(/^[\d,]$/) ? Number(aa) : aa;
            bb = bb.match(/^[\d,]$/) ? Number(bb) : bb;

            if (aa < bb) return -1;
            if (aa > bb) return 1;
            return 0;
        });
        if (this.tblOpts.sortMeta.sorted === "descending") sortGroup.reverse();
        // This table update doesn't change pagination; reset direction
        if (this.tblOpts.pgnMta.dir) this.tblOpts.pgnMta.dir = Number(0);
        // If the table has been filtered, just sort those
        if (this.tblOpts.filtering) prepTable(this.tblOpts.pgnMta.allRows);
        else this.prepTable();
    }

    // FITERING

    // Set up listeners for clear and input
    initiateTableFilter(options) {
        // If things are missing, return
        if (document.querySelector(".clear") === null) return;
        if (!options.filterDiv) return;
        if (document.getElementById(options.filterDiv.replace("#", "")) === null) return;

        this.tblOpts.filtering = true;
        const filterInput = document.getElementById(options.filterDiv.replace("#", ""));

        // listen for clicks on clear button
        document.querySelector(".clear").addEventListener("click", function() {
            filterInput.value = "";
            // This resets the table to initial direction
            if (this.tblOpts.pgnMta.dir) this.tblOpts.pgnMta.dir = Number(0);
            // TODO should it reset to page 1
            this.prepTable();
        });
        // Listen for input in the serach field
        filterInput.addEventListener("keyup", function(e) {
            this.searchTable(e.target.value);
        });
    }

    // Search the table with input
    searchTable(searchTerm) {
        const filteredList = [];
        this.tblOpts.data.forEach(function(object) {
            const stringObject = JSON.stringify(object).toLowerCase();
            if (stringObject.match(searchTerm.toLowerCase())) filteredList.push(object);
        });
        // Clear direction and page
        if (this.tblOpts.pgnMta.dir) this.tblOpts.pgnMta.dir = Number(0);
        if (this.tblOpts.pgnMta.crntPage) this.tblOpts.pgnMta.crntPage = Number(1);
        this.prepTable(filteredList);
    }

    // TABLE MAKING

    // Prep the data and pagination for the table
    originalPrepTable(filteredList) {
        const data = filteredList || this.tblOpts.data;

        // If they don't specifiy pagination, draw table with everything
        if (!this.tblOpts.pagination) return this.updateTable(data);

        // Create Pagination Metadata
        this.buildPaginationMeta(data);
        // Build the table with paginated data
        this.updateTable(this.tblOpts.pgnMta.crntRows);
        // Append pagination DOM elements
        // If there is no data, don't paginate
        if (data.length === 0) addPaginationDOM(true);
        else thsi.addPaginationDOM();
    }

    prepTable(filteredList) {
        //Eyeseetea prepTable wrapper

        if (this.tblOpts.onLoadingPage) {
            const dir = this.tblOpts.pgnMta.dir || 0;
            const currentPage = this.tblOpts.pgnMta.crntPage || 1;
            const loadingPage = currentPage + dir;
            this.tblOpts.onLoadingPage(loadingPage).then(dataResponse => {
                this.tblOpts.data = dataResponse;

                const data = filteredList || this.tblOpts.data;

                // If they don't specifiy pagination, draw table with everything
                if (!this.tblOpts.pagination) return this.updateTable(data);

                // Create Pagination Metadata
                this.buildPaginationMeta(data);
                // Build the table with paginated data
                this.updateTable(this.tblOpts.pgnMta.crntRows);

                // Append pagination DOM elements
                // If there is no data, don't paginate
                if (data.length === 0) {
                    this.addPaginationDOM(true);
                } else {
                    this.addPaginationDOM();
                }

                if (this.tblOpts.onLoadedPage) {
                    this.tblOpts.onLoadedPage();
                }
            });
        } else {
            this.originalPrepTable(filteredList);
            if (this.tblOpts.onLoadedPage) this.tblOpts.onLoadedPage();
        }
    }

    updateTable(data) {
        const rawTemplate = document.getElementById(this.tblOpts.templateID).innerHTML;
        const content = Mustache.render(rawTemplate, { rows: data });
        document.getElementById(this.tblOpts.tableDiv).innerHTML = content;
    }

    // PAGINATION

    // Create the metadata used in pagination
    buildPaginationMeta(data) {
        const dir = this.tblOpts.pgnMta.dir || 0;
        const current = this.tblOpts.pgnMta.crntPage || 1;
        this.tblOpts.pgnMta.allRows = data;
        this.tblOpts.pgnMta.allRowsLen = data.length;
        this.tblOpts.pgnMta.totalPages = Math.ceil(
            this.tblOpts.pgnMta.allRowsLen / this.tblOpts.pagination
        );
        this.tblOpts.pgnMta.crntPage = current + dir;
        this.tblOpts.pgnMta.nextPage = this.tblOpts.pgnMta.crntPage - 1;
        this.tblOpts.pgnMta.crntStart =
            this.tblOpts.pgnMta.crntPage * this.tblOpts.pagination - this.tblOpts.pagination;
        this.tblOpts.pgnMta.crntEnd = this.tblOpts.pgnMta.crntPage * this.tblOpts.pagination;
        this.tblOpts.pgnMta.crntRows = data.slice(
            this.tblOpts.pgnMta.crntStart,
            this.tblOpts.pgnMta.crntEnd
        );
        return;
    }

    // Add pagination elements and listeners to the DOM
    addPaginationDOM(nopages) {
        const tblId = this.tblOpts.tableDiv.slice(1);
        const el = document.createElement("div");
        el.setAttribute("id", "Pagination");
        el.setAttribute("pageno", this.tblOpts.pgnMta.crntPage);
        el.classList.add("table-pagination");
        if (nopages) {
            el.innerHTML = "No results</div>";
        } else if (this.tblOpts.pgnMta.allRowsLen <= this.tblOpts.pagination) {
            el.innerHTML = "Page 1 of 1</div>";
        } else {
            el.innerHTML =
                "Showing page " +
                this.tblOpts.pgnMta.crntPage +
                " of " +
                this.tblOpts.pgnMta.totalPages +
                " <a class='pagination-pre pagination-pre-" +
                tblId +
                "'>Previous</a>" +
                " <a class='pagination-next pagination-next-" +
                tblId +
                "'>Next</a></div>";
        }
        document.getElementById("#" + tblId).append(el);
        // Don't show pagination in these cases TODO clean up
        if (nopages) return;
        if (this.tblOpts.pgnMta.allRowsLen <= this.tblOpts.pagination) return;

        // On the last page
        if (this.tblOpts.pgnMta.crntPage >= this.tblOpts.pgnMta.totalPages) {
            document.querySelector(".pagination-next-" + tblId).classList.add("no-pag");
            document.querySelector(".pagination-pre-" + tblId).classList.remove("no-pag");
        }
        // On the first page
        if (this.tblOpts.pgnMta.crntPage === 1) {
            document.querySelector(".pagination-pre-" + tblId).classList.add("no-pag");
            document.querySelector(".pagination-next-" + tblId).classList.remove("no-pag");
        }
        // Listen for next clicks
        document.querySelector(".pagination-next-" + tblId).addEventListener("click", e => {
            if (e.target.classList.contains("no-pag")) return;
            this.tblOpts.pgnMta.dir = Number(1);
            // if there is text in the search and you are paginating
            // through filtered data, build table with what is in paginationmeta data
            if (this.tblOpts.filtering) prepTable(this.tblOpts.pgnMta.allRows);
            else this.prepTable();
        });
        // Listen for previous clicks
        document.querySelector(".pagination-pre-" + tblId).addEventListener("click", e => {
            if (e.target.classList.contains("no-pag")) return;
            this.tblOpts.pgnMta.dir = Number(-1);
            // if there is text in the search and you are paginating
            // through filtered data, build table with what is in paginationmeta data
            if (this.tblOpts.filtering) prepTable(this.tblOpts.pgnMta.allRows);
            else this.prepTable();
        });
    }
}
