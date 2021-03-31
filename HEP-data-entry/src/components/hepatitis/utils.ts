
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export function getResource(filename: string): Promise<string> {
    return readFile(path.join(__dirname, `resources/${filename}`), "utf8");
}