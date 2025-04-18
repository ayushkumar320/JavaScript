const user = {
    username: "ayushnotkumar",
    age: 19,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this);
        
    },
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this) // This gives current context


// function chai(){
//     let username = "hitesh"
//     // console.log(this.username) we can only use this in objects not in functions
// }
// chai();



// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// Arrow Function

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()


// Basic Arrow Function (Explicit)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit Arrow Function - isme return nahi likhte as we dont use scope and sab same line me rehta
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "hitesh",}) // To return an object wrap the object in () parenthesis

// console.log(addTwo(4, 5))



