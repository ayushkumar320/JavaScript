const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task 1");
        resolve(); // Connected resolve
    }, 1000);
});

promiseOne.then(function(){
    console.log("Async task 1 completed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 task completed")
});

// We can use arrow functions too

/*
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async Task 2 completed")
});
*/

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user.email);
    console.log(user)
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Ayush", password: "123"});
        } else{
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
});
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either reoslved or rejected!")
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"});
        } 
        else {
            reject('ERROR: JS went wrong!')
        }
    }, 3000);
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response)
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response;
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Error ", err);
});

