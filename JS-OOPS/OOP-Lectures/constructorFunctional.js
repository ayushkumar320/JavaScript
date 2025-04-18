// function greet(name){
//     console.log("Hello, ",name);
// }
// greet("Ayush");

function Person(name, age){
    this.name = name; // Anything that we declare in constructor function has to have this keyword with it
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Land Cruiser"); // new is used to create the different objects.
// console.log(myCar);

let myNewCar = new Car("Audi", "A4");
// console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.description = function(){
        return `This is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.description());

// Prototype Chaining

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());
let cat = new Animal("Cat");
console.log(cat.sound());