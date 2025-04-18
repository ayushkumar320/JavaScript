// Singleton using Object.create

// Object literals

const mySym = Symbol("key1");


const JsUser = {
    name : "Ayush",
    "full name" : "Ayush Kumar",
    [mySym] : "mykey1",
    age : 18,
    location : "Bengaluru",
    email : "ayush@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser) // Ab kuch change nahi hoga
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User!");
}
// JsUser.greeting();
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
JsUser.greetingTwo();