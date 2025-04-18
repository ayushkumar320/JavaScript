// 1. Checking if a number is greater than other number:
/*
let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");
if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
} 
else {
    console.log(`${num1} is not bigger than ${num2}`);
}
console.log("I am regular bottom code");
*/
// 2. Checking if a string is equal to another string:
/*
let username = "chai";
let anotherUsername = "chai-code";

if(username == anotherUsername){
    console.log(`${username} is already been used, please pick another username!`);
}
else{
    console.log("You can proceed with the next process!");
}
*/

// 3. Checking if a variable is number or not:
/*
let score = 34;
if (typeof(score) === 'number'){
    console.log("Yes it is a number");
}
else{
    console.log("It is not a number");
}
*/

// 4. Checking if a boolean value is true or false: 
/*
let isLoggedIn = true;
if(isLoggedIn){
    console.log("User is LoggedIn successfully");
}
else{
    console.log("User needs to LogIn first");   
}
*/

// 5. Checking if an array is empty or not:  

let items = [];
console.log(items.length);
if(items.length === 0){
    console.log("Yep, the array is empty");
}
else{
    console.log("The array is not empty!");
}