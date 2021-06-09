import { createElement } from "typed-html";

interface TableTitleAttributes {
    title: string;
    info?: string;
}

export function TableTitle(attributes: TableTitleAttributes): string {
    const { title, info } = attributes;

    return (
        <h4>
            {title}
            {info ? (
                <i
                    class="fa fa-info-circle"
                    style="font-size:16px;color:#276696;"
                    title={`${info}`}
                >
                    :
                </i>
            ) : (
                ":"
            )}
        </h4>
    );
}
