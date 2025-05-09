//  Primitive (Call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
function greet(){
    console.log("Hi!");
}
// console.log(typeof heros);
// greet();
// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non- Primitive)

let myYoutubeName = "hiteshchoudharydotcom" // goes into stack

let anotherName = myYoutubeName // value gets copied
anotherName = "chaiaurcode"
console.log(myYoutubeName)
console.log(anotherName)

// User1 goes into heap i.e dono ko same reference milta hai
let userOne = { 
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne
userTwo.email = "user@yahoo.com";
console.log(userOne.email);
console.log(userTwo.email);