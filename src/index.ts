import { CSVFileReader } from './CSVFileReader';

const cSVFileReader = new CSVFileReader("football.csv");
cSVFileReader.read();
console.log(cSVFileReader.data);