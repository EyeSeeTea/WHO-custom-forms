import { createElement } from "typed-html";

export interface TabsAttributes {
    items: Array<{
        title: string;
        contents: string;
    }>;
}

export function Tabs(attributes: TabsAttributes): string {
    const { items } = attributes;

    return (
        <div
            id="tabs"
            class="ui-tabs ui-corner-all ui-widget ui-widget-content"
        >
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
