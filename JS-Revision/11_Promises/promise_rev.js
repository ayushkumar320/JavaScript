const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is loaded");
        resolve();
    }, 1000)
});
promiseOne.then(function(){
    console.log("Resolve connected and successfully done!");
});

const promiseTwo = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        setTimeout(function(){
            console.log("Setting Async Task 2");
            resolve();
        }, 2000);
    } else {
        setTimeout(function(){
            console.log("Failed!");
            reject(`Error in setting up the task`);
        }, 2000);
    }
});
promiseTwo.then(function(){
    console.log("Done");
}).catch(function(error){
    console.log(error);
});