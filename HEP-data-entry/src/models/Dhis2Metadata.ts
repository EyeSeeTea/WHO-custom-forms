import fetch from "node-fetch";
import * as qs from "qs";

import { safeParseJSON } from "../utils";
import { Section, DataEntryForm } from "./d2Models";

export interface Ref {
    id: string;
}

interface DataSetElement {
    dataElement: Ref;
    dataSet: Ref;
    categoryCombo?: Ref;
}

export interface DataSet {
    id: string;
    name: string;
    dataEntryForm?: Ref;
    dataSetElements: DataSetElement[];
    sections: Section[];
}

export interface MetadataPayload {
    dataSets: { id: string; dataEntryForm: Ref }[];
    dataEntryForms: DataEntryForm[];
}

export interface MetadataResponse {
    importParams: object;
    status: "OK" | "ERROR";
    stats: object;
    typeReports: object[];
}

export type MetadataParams = Partial<{
    "dataSets:fields": string;
    "dataSets:filter": string;
}>;

export type MetadataOptions = Partial<{
    importStrategy: "CREATE_AND_UPDATE" | "CREATE" | "UPDATE" | "DELETE";
}>;

export type Dhis2MetadataOptions = {
    debug: boolean;
};

export class Dhis2Metadata {
    private apiUrl: string;

    headers = { "Content-Type": "application/json" };

    constructor(public baseUrl: string, public options: Dhis2MetadataOptions) {
        this.apiUrl = baseUrl.replace(/\/*$/, "") + "/api";
    }

    private debug(message: string): void {
        if (this.options.debug) {
            console.debug(message);
        }
    }

    private getEndpoint(path: string, params: object): string {
        const queryStrings = qs.stringify(params, { indices: false });
        const suffix = queryStrings ? `?${queryStrings}` : "";
        const cleanPath = path.replace(/^\/*/, "");
        return `${this.apiUrl}/${cleanPath}` + suffix;
    }

    async get<T>(params: MetadataParams): Promise<T> {
        const url = this.getEndpoint("/metadata", params);
        this.debug(`GET ${decodeURIComponent(url)}`);

        return fetch(url, {
            method: "GET",
            headers: this.headers,
        }).then(safeParseJSON);
    }

    async post(payload: MetadataPayload, options: MetadataOptions): Promise<MetadataResponse> {
        const url = this.getEndpoint("/metadata", options);
        this.debug(`POST ${url}`);

        return fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: this.headers,
        }).then(safeParseJSON);
    }
}
