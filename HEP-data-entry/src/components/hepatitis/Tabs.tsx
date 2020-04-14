import { createElement } from "typed-html";
import { Table } from "./Table";
import { Section } from "../../models/d2Models";

export interface TabsAttributes {
    sections: Section[];
}

export function Tabs(attributes: TabsAttributes): string {
    const { sections } = attributes;
    const items = sections.map(s => {
        return {
            id: s.id,
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
                {items.map(({ title, id }, index) => (
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
                            <span id={`${id}-section-title`}>{title}</span>
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
