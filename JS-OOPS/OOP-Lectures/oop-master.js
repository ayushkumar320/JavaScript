// This is a regular object
let car = {
    make: "Toyota",
    model: "Land Cruiser",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`; // Without "this", this function can not access the make and year variables.
    }
};

// console.log(car.start());

// Constructor Function
// The below is a constructor function of which many other objects can be created using the new keyword
function Person(name, age){
    this.name = name;
    this.age = age;
}
// Below we are creating a new object
let john = new Person("John", 32);
// console.log(john);


// Prototype Chain - We can add new prototypes 

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}

let myDog = new Animal("Doggy");
// console.log(myDog.speak());

Array.prototype.ayush = function(){
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3, 4];
// console.log(myArray.ayush());


// Classes in JS

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    // Below is a function, but it is declared inside a class, therefore we dont need to write the function keyword. And inside class, we call FUNCTIONS as METHODS.
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

// Inheritance - If we create another class and if there is some function (here start in above) and if we need to use that in new function, we borrow that and this is called inheritance.

class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

// Creating an object

let myCar = new Car("Toyota", "Land Cruiser");  // Here Car is borrowing a constructor from Vehicle

// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation - It means protecting any data that we want.

class BankAccount {
    #balance = 0; // no one can access, without custom method
    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let myAccount = new BankAccount();
myAccount.deposit(300);

// console.log(myAccount.getBalance());


// Abstraction - It means, it hides the complex implementation details behind the server

class CoffeeMachine {
    start(){
        // Call DB
        // Filter a value
        return `Starting Machine....`;
    }

    brewCoffee() {
        // complex calculation
        return `Brewing Coffee...`;
    }

    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} \n${msg2}`;
    }
}

let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism - The ability of something to have or to be displayed in more than one form

class Bird {
    fly(){
        return `I am flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can not fly...`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());


// Static method - Special method (functions) that can only be called by the class itself

class Calculator {
    static add (a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // Gives the error because of static

// console.log(Calculator.add(4, 5)); // Directly calling the class, not through any object.

// Getters and Setters

class Employee {

    #salary;

    constructor(name, salary){
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary");
        }
        else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
console.log(emp.salary);