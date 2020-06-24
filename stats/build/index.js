"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require(".//MatchReader");
var Summary_1 = require("./Summary");
// //Create an object that satisfies
//const csvFileReader = new CsvFileReader("original.csv");
// //Create an instance of match reader and pass in something satisfying
//const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv("original.csv");
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
//const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
