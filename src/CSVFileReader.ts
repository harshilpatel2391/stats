import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
    data: MatchData[] = [];
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
        })
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ];
        });
    }
}