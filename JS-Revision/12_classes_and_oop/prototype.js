let myName = "Ayush     ";
let myChannel = "chai    "

// console.log(myName.trim().length);


let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function(){
    console.log(`Ayush is present in all objects`);
}

Array.prototype.heyayush = function(){
    console.log(`Hey array!`);
}

// heroPower.ayush();
myHeroes.ayush();
myHeroes.heyayush();


// Inheritance - Old school
const user = {
    name: "chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user;

console.log(Teacher.email);

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeVideo);

let anotherUsername = "ChaiAurCode       ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength();
"hitesh   ".trueLength();
"ice Tea   ".trueLength();