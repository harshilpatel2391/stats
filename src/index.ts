import { MatchReader } from "./MatchReader";

const cSVFileReader = new MatchReader("football.csv");
cSVFileReader.read();
console.log(cSVFileReader.data);