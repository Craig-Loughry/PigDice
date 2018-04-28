"use strict";
exports.__esModule = true;
var Die = /** @class */ (function () {
    function Die(inRoll, inScore, inTotalScore) {
        this.roll = inRoll;
        this.score = inScore;
        this.totalscore = inTotalScore;
    }
    Die.prototype.about = function () {
        return "PigDice: \n                        roll=" + this.roll + ",\n                        score=" + this.score + ",\n                        totalscore" + this.totalscore;
    };
    return Die;
}());
exports.Die = Die;
