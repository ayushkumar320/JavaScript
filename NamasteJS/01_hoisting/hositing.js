console.log(x); // Here x is not yet declared so undefined
console.log(greet()); // But somehow the function is getting printed without even declaring yet
// console.log(greetArrow()); Throws an error as it does not behave as an function, it will behave like a variable.
console.log(greet); // Gives us the function

var x = 7;
function greet() {
    return `Namaste JS ${x}`;
}

var greetArrow = () => `NamasteJS Using Arrow Function`;
console.log(greetArrow());

console.log("--------------")
console.log(x)
// console.log(y) This will get not defined
console.log(greet())
console.log(greet) // Gives us the function
