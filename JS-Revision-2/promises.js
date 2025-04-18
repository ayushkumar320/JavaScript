let promiseOne = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
        if(!error){
            resolve({username: "ayushkumar320", password: "ayushkumar"});
        } else {
            reject(`Error connecting DB!`);
        }
    }, 3000);
});

// Old method
promiseOne.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// New method

let promiseTwo = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
        if(!error){
            resolve({username: "ayushkumar320", password: "ayushkumar"});
        } else {
            reject(`Error connecting DB!`);
        }
    }, 3000);
});