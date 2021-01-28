
import * as fs from "fs";
import _ = require("lodash");
import * as path from "path";
import { promisify } from "util";
import { NameRef, SectionDataElement } from "../../models/d2Models";
import { CustomMetadata } from "./CustomMetadata";

const readFile = promisify(fs.readFile);

export function getResource(filename: string): Promise<string> {
    return readFile(path.join(__dirname, filename), "utf8");
}

export function sortCategoryOptionCombos(dataElement: SectionDataElement, customMetadata: CustomMetadata): NameRef[] {
    return _.sortBy(
        dataElement.categoryCombo.categoryOptionCombos.map(catOpCombo => {
            const catComboData = customMetadata.optionCombos[catOpCombo.id];

            const order = catComboData ? catComboData.order : 0;

            return {
                id: catOpCombo.id,
                name: catOpCombo.name,
                order: order,
            };
        }),
        ["order"]
    );
} 