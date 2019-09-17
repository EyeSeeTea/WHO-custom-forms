import * as _ from "lodash";
import * as md5 from "md5";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { Response } from "node-fetch";

const readFile = promisify(fs.readFile);

export function prettyJSON(value: any) {
    return JSON.stringify(value, null, 4);
}

export function getResource(filename: string): Promise<string> {
    return readFile(path.join(__dirname, `resources/${filename}`), "utf8");
}

export async function safeParseJSON(response: Response) {
    const body = await response.text();

    try {
        return JSON.parse(body);
    } catch (err) {
        console.error("Error:", err);
        console.error("Response body:", body);
        throw err;
    }
}

export function repeat<T>(value: T, n: number): T[] {
    return _.flatten(_.times(n, _.constant([value])));
}

const asciiLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const asciiNumbers = "0123456789";
const asciiLettersAndNumbers = asciiLetters + asciiNumbers;
const uidStructure = [asciiLetters, ...repeat(asciiLettersAndNumbers, 10)];
const maxHashValue = uidStructure.map(cs => cs.length).reduce((acc, n) => acc * n, 1);

/* Return a valid DHIS2 UID (/^[a-zA-Z]{1}[a-zA-Z0-9]{10}$/) using key as seed generator */
export function getUid(key: string) {
    const md5hash = md5(key);
    const nHashChars = Math.ceil(Math.log(maxHashValue) / Math.log(16));
    const hashInteger = parseInt(md5hash.slice(0, nHashChars), 16);
    const result = uidStructure.reduce(
        (acc, chars) => {
            const { n, uid } = acc;
            const nChars = chars.length;
            const quotient = Math.floor(n / nChars);
            const remainder = n % nChars;
            const uidChar = chars[remainder];
            return { n: quotient, uid: uid + uidChar };
        },
        { n: hashInteger, uid: "" }
    );

    return result.uid;
}
