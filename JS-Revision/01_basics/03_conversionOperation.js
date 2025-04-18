let score = "33abc";

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber) // NaN ka type number aa rha h WTF?
let check = NaN;
// console.log(check)
// console.log(typeof check)

let newVal = null;
let convertedNewVal = Number(newVal);
// console.log(convertedNewVal);
// console.log(typeof convertedNewVal);
// true -> gets converted to 1, and false to 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// 1 -> True
// 0 -> False
// "" -> False
// "anything" -> True

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

// *************************** Operations *******************************

let value = 3
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello "
let str2 = "ayush"
// console.log(str1+str2)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// console.log(typeof("1" - 1))

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
