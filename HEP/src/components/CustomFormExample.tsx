import { createElement } from "typed-html";
import { EntryField } from "./EntryField";
import { Tabs } from "./Tabs";

interface CustomFormAttributes {}

const items = [
    {
        title: "Measles",
        contents: (
            <div>
                Measles contents
                <EntryField
                    dataElementId="P3jJH5Tu5VC"
                    categoryOptionComboId="wHBMVthqIX4"
                />
            </div>
        )
    },
    {
        title: "Cholera",
        contents: (
            <div>
                Cholera contents
                <EntryField
                    dataElementId="P3jJH5Tu5VC"
                    categoryOptionComboId="SdOUI2yT46H"
                />
            </div>
        )
    }
];

export function CustomFormExample(_attributes: CustomFormAttributes): string {
    return <Tabs items={items} />;
}
