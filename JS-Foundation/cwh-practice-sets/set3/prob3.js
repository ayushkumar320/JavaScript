const prompt = require('prompt-sync')();
let randomNum = Math.random();
randomNum = randomNum*10; // [0, 10)
randomNum = Math.floor(randomNum) + 1; // [1, 10]

console.log("You need to guess a number between 1 - 10.");
let guessedNum = prompt("Enter the number: ");
let numOfGuess = 1;
while(guessedNum != randomNum){
    guessedNum = prompt("Enter the number again: ");
    numOfGuess++;
}
console.log("You guessed " + guessedNum + " right in " + numOfGuess + " times");