"use strict";
exports.__esModule = true;
var Game_1 = require("./Game");
var round = new Game_1.Game(0, 0, 0);
var rollScore = 0;
while (round.diceRoll != 1) {
    round.diceRoll = getRandomInt();
    round.rollScore++;
    round.totalScore += round.diceRoll;
    console.log("Roll Number..." + round.rollScore, "score of roll..." + round.diceRoll, "Total Score..." + round.totalScore);
}
function getRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
}
