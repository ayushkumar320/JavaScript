/*
let randomNumber = Math.random(); // 0 - 0.9999999.. upto 16 decimal place
randomNumber *= 6; // Range = [0, 6)
randomNumber = Math.floor(randomNumber) + 1;
// Math.floor(randomNumber) - Used to round down to integer value and + 1 -> Range = [1, 6]
console.log(randomNumber);
*/

let randomInt = Math.random();
randomInt = randomInt*10;
randomInt = Math.floor(randomInt) + 1;
console.log(randomInt);