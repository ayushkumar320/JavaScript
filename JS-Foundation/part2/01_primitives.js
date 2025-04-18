// 1. Number

let balance = 120;
console.log(typeof(balance)); // typeof() gives the type of data

let anotherBalance = new Number(120); // Creates a Object

console.log(anotherBalance); 
console.log(anotherBalance.valueOf()); 
console.log(typeof(anotherBalance)); // Becomes non-primitive

// 2. Boolean

let isActive = true;
let isReallyActive = new Boolean(false); // not recommended
console.log(isActive);
console.log(isReallyActive.valueOf());
console.log(typeof(isActive));
console.log(typeof(isReallyActive));

// 3. NULL and undefined (interview questions)

let firstName;
console.log(typeof(firstName)); // Undefined - it exists but its value is not there
// console.log(typeof(lastName)); //It is not defined,

let midName = null; // null means empty
let lastName = undefined;
console.log(midName);
console.log(lastName);
console.log(typeof(midName)); // object

// 4. String
let myString = "Hello";
let myString1 = 'Hola'; // use "this" or 'this'
let userName = 'ayush';

let oldGreet = myString + "ayush";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`; 
// Advantage of `this` is that we can add variables directly as comaped to oldGreet where we need to add variable by addition operator and takes a lot of formatting.
console.log(greetMessage);

// This backtilt is acting just as a string with  a placeholder where placeholder is ${}.
let demoOne = `The Value is: ${7*7}`; 
console.log(demoOne);


// 5. Symbols

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);
let sm3 = Symbol("ayush"); // this is ayush
let sm4 = Symbol("ayush"); // this is ayush
console.log(sm3==sm4); // but this is false, cause symbols are guarenteed to be unique both are ayush here but however both are unique
console.log(sm3);