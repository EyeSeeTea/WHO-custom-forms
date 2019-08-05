import { createElement } from "typed-html";
import { Section } from "../models/Form";
import { Table } from "./Table";

export interface TabsAttributes {
    sections: Section[];
}

export function Tabs(attributes: TabsAttributes): string {
    const { sections } = attributes;
    const items = sections.map(s => {
        return {
            title: s.displayName,
            contents: <Table section={s} />,
        };
    });
    return (
        <div id="tabs" class="ui-tabs ui-corner-all ui-widget ui-widget-content">
            <ul
                role="tablist"
                class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
            >
                {items.map(({ title }, index) => (
                    <li
                        role="tab"
                        tabindex="-1"
                        class="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                    >
                        <a
                            href={`#tab-${index}`}
                            role="presentation"
                            tabindex="-1"
                            class="ui-tabs-anchor"
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>

            {items.map(({ contents }, index) => (
                <div
                    id={`tab-${index}`}
                    role="tabpanel"
                    class="ui-tabs-panel ui-corner-bottom ui-widget-content"
                >
                    {contents}
                </div>
            ))}
        </div>
    );
}