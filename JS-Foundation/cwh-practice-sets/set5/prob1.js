// Taking input and storing it in an array
const prompt = require('prompt-sync')();
let numberArray = [];
for(let turn = 0; turn < 5; turn++){
    let num = prompt("Enter number " + (turn+1) +" : ");
    numberArray.push(num);
}

console.log(numberArray);