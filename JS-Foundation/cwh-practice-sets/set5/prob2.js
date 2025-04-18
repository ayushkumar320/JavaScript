// Taking input and storing it in an array until user hits 0
const prompt = require('prompt-sync')();
let numberArray = [];
let userInput = prompt("Enter the number: ");
while(userInput!=0){
    userInput = prompt("Enter the number again: ");
    numberArray.push(userInput);
}
console.log(numberArray);