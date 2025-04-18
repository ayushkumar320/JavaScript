// 1. Object literal

const user = {
    "username": "ayush",
    loginCount: 22,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }

}

// console.log(user["username"]);
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this)


// const promise = new Promise() // new keyword - constructor function
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chai aur code", 11, false);
console.log(userOne.constructor);
console.log(userTwo);