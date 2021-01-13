import { createElement } from "typed-html";
import { SectionDataElement } from "../../domain/common/entities";
import { CustomMetadata } from "../../domain/snakebite/CustomMetadata";
import { CatOptionCombosDataCells } from "./CatOptionCombosDataCells";
import { CatOptionCombosHeaderCells } from "./CatOptionCombosHeaderCells";

interface DataElementAttributes {
    customMetadata: CustomMetadata;
    dataElement: SectionDataElement;
}

export function DataElement(attributes: DataElementAttributes): string {
    const { dataElement, customMetadata } = attributes;

    const tableAttributes = {
        border: "1",
        bordercolor: "#ccc",
        cellpadding: "5",
        cellspacing: "0",
    };

    const dataElementData = customMetadata.dataElements[dataElement.id];

    return (
        <div>
            <h4>
                {dataElement.formName}
                {dataElementData && dataElementData.info ? (
                    <i
                        class="fa fa-info-circle"
                        style="font-size:16px;color:#276696;"
                        title={`${dataElementData.info}`}
                    >
                        :
                    </i>
                ) : (
                    ":"
                )}
            </h4>

            <table {...tableAttributes} class="sectionTable">
                <thead>
                    <tr>
                        <CatOptionCombosHeaderCells
                            customMetadata={customMetadata}
                            dataElement={dataElement}
                        />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <CatOptionCombosDataCells
                            customMetadata={customMetadata}
                            dataElement={dataElement}
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
