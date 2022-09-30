import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
    fileToWrite: string;
    constructor(fileToWrite: string) {
        this.fileToWrite = fileToWrite;
    }
    print(report: string): void {
        const html = `
        <div>
            <h1>Analysis output</h1>
            <div>${report}</div>
        </div>
        `;

        fs.writeFileSync(this.fileToWrite, html);
    }

}