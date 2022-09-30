import fs from "fs";
import { DataReader } from "./MatchReader";

export class CSVFileReader implements DataReader {
    data: string[][] = [];
    filename: string;
    constructor(filename: string) {
        this.filename = filename;
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n")
        .map((row: string): string[] => {
            return row.split(",");
        });
    }
}