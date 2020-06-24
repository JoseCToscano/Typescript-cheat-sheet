import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResults";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

// new Summary(new WinsAnalysis, new ConsoleReport)
