import { DataReader, MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Analyzer, OutputTarget, Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const dataReader: DataReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(dataReader);
matchReader.load();
const analyzer: Analyzer = new WinsAnalysis("Man United");
// const outputTarget: OutputTarget = new ConsoleReport();
const outputTarget: OutputTarget = new HtmlReport("report.html");
const summary = new Summary(analyzer, outputTarget);
summary.buildAndPrintReport(matchReader.matches);
