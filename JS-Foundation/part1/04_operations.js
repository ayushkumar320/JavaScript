// Arithematic Operations
let addition = 4+5;
console.log(addition);

let score = 120;
let bonus = 15;
let totalScore = score+bonus;
console.log(totalScore);

let subtract = 4-8;
console.log(subtract);

let mul = 3*4;
console.log(mul);

let quo = 3/2;
console.log(quo);

let rem = 3%2;
console.log(rem);

let exp = 2**5;
console.log(exp);

// myScore++ first prints myScore then increase by 1 whereas ++myScore wil first increase the value by 1 and then print. 
let myScore = 68;
console.log(myScore++); 
console.log(myScore);

// Comparison Operations (>, <, ==, !=, ===, !==)

let num1 = 3;
let num2 = 3;
let num3 = 6;
console.log(num1==num2); // Gives the boolean result
console.log(num1!=num3);
console.log(num1>num3);
console.log(num1<num3);

console.log(num1=="3"); // returns true as == checks only for literal value, to check with data-type use ===

console.log(num1==="3"); // returns false as here num1 is a number and we are checking for string, simillarly for !==

console.log(num1 != "3"); // checking with literal value of 3, ignores the type so num1 is 3 hence true
console.log(num1 !== "3"); // as num1 is type of number, it returns true cause num1 is not any string