import { DataReader, MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";

const dataReader: DataReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(dataReader);

console.log(matchReader.matches);
