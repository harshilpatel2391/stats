import fs from "fs";

export abstract class CSVFileReader<TypeOfData> {
    data: TypeOfData[] = [];
    filename: string;
    constructor(filename: string) {
        this.filename = filename;
    }

    abstract mapRow(row: string[]): TypeOfData;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n")
        .map((row: string): string[] => {
            return row.split(",");
        })
        .map(this.mapRow);
    }
}