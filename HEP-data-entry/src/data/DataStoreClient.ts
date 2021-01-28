import fetch from "node-fetch";
import { safeParseJSON } from "../utils";

export class DataStoreClient {
    private baseUrl: string;

    headers = { "Content-Type": "application/json" };

    constructor(baseUrl: string, baseKey: string) {
        this.baseUrl = baseUrl.replace(/\/*$/, "") + `/api/dataStore/${baseKey}`;
    }

    async get<T>(key: string): Promise<T | undefined> {
        const url = `${this.baseUrl}/${key}`;
        console.debug(`GET ${decodeURIComponent(url)}`);

        const response = await fetch(url, {
            method: "GET",
            headers: this.headers,
        });

        if (response.status === 200) {
            return safeParseJSON(response);
        } else if (response.status === 404) {
            return undefined;
        } else {
            throw Error(await response.text())
        }
    }
}