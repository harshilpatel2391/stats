import { DataReader, MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Analyzer, OutputTarget, Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const dataReader: DataReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(dataReader);
matchReader.load();
const analyzer: Analyzer = new WinsAnalysis("Man United");
const outputTarget: OutputTarget = new ConsoleReport();
const summary = new Summary(analyzer, outputTarget);
summary.buildAndPrintReport(matchReader.matches);
