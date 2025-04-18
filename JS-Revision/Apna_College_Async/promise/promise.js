let promise = new Promise(function(resolve, reject){
    console.log("I am a promise");
    reject("Some error occured")
});