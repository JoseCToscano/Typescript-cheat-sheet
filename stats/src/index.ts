import { MatchReader } from ".//MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// //Create an object that satisfies
//const csvFileReader = new CsvFileReader("original.csv");

// //Create an instance of match reader and pass in something satisfying
//const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("original.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
//const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
