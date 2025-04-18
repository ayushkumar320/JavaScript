// if () {} else {}

// if (condition) {
//     code
// }

// if (2 !== "2"){
//     console.log("Inner statement when true")
// }

// if (false){
//     console.log("Inner statement when false")
// }


const temperature = 41;
// if(temperature<50){
//     console.log("less than 50")
// }
// else{
//     console.log("greater than 50")
// }

// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)


const balance = 1000

// Implicit scope
// if (balance > 500) console.log("test"),
// console.log("test 2"); // , laga ke multiple aur khtm krna ho to semicolon

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if( balance < 750){
//     console.log("less than 750")
// }
// else if (balance < 1250){
//     console.log("less than 1250")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in!")
}