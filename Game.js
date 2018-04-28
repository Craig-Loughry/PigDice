"use strict";
exports.__esModule = true;
var Game = /** @class */ (function () {
    function Game(indiceRoll, inrollScore, intotalScore) {
        this.diceRoll = indiceRoll;
        this.rollScore = inrollScore;
        this.totalScore = intotalScore;
    }
    Game.prototype.about = function () {
        return "PigDice: \n                        diceRoll=" + this.diceRoll + ",\n                        rollScore=" + this.rollScore + ",\n                        totalScore" + this.totalScore;
    };
    return Game;
}());
exports.Game = Game;
