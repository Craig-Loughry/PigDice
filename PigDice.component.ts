import {Game} from './Game';

let round: Game = new Game(0,0,0);
let rollScore: number = 0;

while (round.diceRoll != 1) {
round.diceRoll = getRandomInt();
round.rollScore++;
round.totalScore += round.diceRoll;
console.log("Roll #   " + round.rollScore,"You Scored a   " + round.diceRoll,"Your total score is  " + round.totalScore);
}



function getRandomInt(): number {
    return Math.floor(Math.random() * 6 + 1)
}
