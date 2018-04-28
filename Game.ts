export class Game {

diceRoll: number;
rollScore: number;
totalScore: number;

constructor(indiceRoll: number, inrollScore: number, intotalScore: number) {
    this.diceRoll = indiceRoll;
    this.rollScore = inrollScore;
    this.totalScore = intotalScore; 
}
 about(): string {
     return `PigDice: 
                        diceRoll=${this.diceRoll},
                        rollScore=${this.rollScore},
                        totalScore${this.totalScore}`;}   
}
             