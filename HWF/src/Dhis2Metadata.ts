import fetch from "node-fetch";
import * as qs from "qs";

import { safeParseJSON } from "./utils";

export interface Ref {
    id: string;
}

export interface DataEntryForm {
    id: string;
    name: string;
    htmlCode: string;
    style: "NORMAL" | "COMFORTABLE" | "COMPACT" | "NONE";
}

export interface Program {
    id: string;
    programStages: ProgramStage[];
}

export interface ProgramStage {
    id: string;
    formType: string;
    dataEntryForm: Ref;
    programStageDataElements: {
        id: string;
        dataElement: DataElement;
    }[];
}

export interface DataElement {
    id: string;
    name: string;
    formName: string;
    valueType: string;
    optionSet: OptionSet;
}

export interface OptionSet {
    id: string;
    options: Option[];
}

export interface Option {
    id: string;
    displayName: string;
    code: number;
}

export interface MetadataPayload {
    programStages: ProgramStage[];
    dataEntryForms: DataEntryForm[];
}

export interface MetadataResponse {
    importParams: object;
    status: "OK" | "ERROR";
    stats: object;
    typeReports: object[];
}

export type MetadataParams = Partial<{
    "programs:fields": string;
    "programs:filter": string;
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
