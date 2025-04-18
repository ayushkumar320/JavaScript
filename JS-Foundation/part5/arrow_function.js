// Arrow functions are used when we need to declare a function in only one line, this helps a lot in code readability when the function is only of single line or say very small.

let sum = (num1, num2) => num1+num2;

const greet = () => console.log("Hello, world!"); 

const sayHi = name => console.log(`Hello ${name}`);

const s1 = sum(65, 4);

let say = sayHi("Ayush");

console.log(s1);
greet();


function SayAfternoon(){
    console.log("Good Afternoon");
}

const Afternoon = () => console.log("Good, Afternoooon!");

Afternoon();