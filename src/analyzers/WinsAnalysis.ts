import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    teamName: string;
    constructor(teamName: string) {
        this.teamName = teamName;
    }
    run(matches: MatchData[]): string {
       let wins = 0;
       for(let match of matches) {
        if(match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
            wins++;
        } else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
            wins++;
        }
       }
       return `Team ${this.teamName} won ${wins} games.`; 
    }
}