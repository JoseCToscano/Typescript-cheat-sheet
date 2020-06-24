import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResults";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    const wins = matches.filter(
      (match: MatchData): boolean =>
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
    ).length;
    return `${this.team} won ${wins} times`;
  }
}
