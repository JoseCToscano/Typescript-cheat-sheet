"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var wins = matches.filter(function (match) {
            return (match[1] === _this.team && match[5] === MatchResults_1.MatchResult.HomeWin) ||
                (match[2] === _this.team && match[5] === MatchResults_1.MatchResult.AwayWin);
        }).length;
        return this.team + " won " + wins + " times";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
