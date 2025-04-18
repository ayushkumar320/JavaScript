// 1. Object

// const - to fix memory refrence, let for normal usage
let username = {
    "first Name": "Ayush", // Either write firstName with no space or first Name with spaces inside double quotes to give variable name
    isLoggedIn: true, 
};

// Having the object declared as const its values are still mutable (changable) const helps to fix the memory references 
// username.firstName = "Mr. Ayush";
username["first Name"] = "Mr. Ayush"; // if there is space between varibale names

// We can also add a new variable 
username.lastName = "Kumar";

// console.log(username.first Name); We can not access when there is a space between variable name, we use
console.log(username["first Name"]);
console.log(username.lastName);
console.log(typeof(username));

// 2. Arrays

let anotherUser = ["hitesh", true]; 

// We can access arrays with their index values, it starts with 0 always
console.log(anotherUser[0]);

// Implicit Type Conversion

console.log("1" + 1); // This converts the other integer as string and results in 11 as string
console.log(1 + "1"); // The same thing happens here, so the key taking is if we need to add a integer to a string, JavaScript converts the integer to string

let isValue = true;
console.log(isValue + 1); // Here the true is considered to be as 1 and 1 + 2 return 2 as number and false is considered to as 0

// Implicit type conversion is bad, thats why the use of TypeScript is becoming more and more popular these days cause TypeScript gives us the liberty when it comes to data types.
 
console.log(typeof(isValue));
console.log(typeof(Number(isValue))); // Type is converted

let nextVal = "2abc";
console.log(Number(nextVal)); // NaN - Not a number but the type of NaN is a number.
