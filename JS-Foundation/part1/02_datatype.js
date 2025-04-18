console.log("hello");
// console.log("chai");
/* Types of data
1. String
2. Numbers
3. Boolean
4. Bigint

5. Undefined
6. Null

7. Objects
8. Symbol
*/

// This is the old method! Not used much
// var score = 102; 

// Modern code uses let to declare a variable. Variable declared with var can be accessed anywhere within the current function or global scope, while a variable declared with let can only be accessed within the block it was declared. This can be useful for preventing variable declarations from accidentally colliding or overwriting one another.

/* 
For example 
function(){
    if(){
        let a = 7;
        var b = 7;
    }
    console.log(a); This will give an error as let is block scoped
    console.log(b); This will give 7 as var is global scoped
}
*/ 


let score = 102; // int
let name = "Ayush"; // string
let isLoggedin = true; //boolean
let isHere = false; // boolean

// Objects
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = {firstname: "ayush", lastname: "kumar"}

let getScore = score; // We can borrow the value from another variable
