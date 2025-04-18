const promiseOne = new Promise(function(resolve, reject){
    let error = false;
    setTimeout(function(){
        if(!error){
            resolve({username: "Ayush",
                isLoggedIn: true,
                age: 19,
                city: "Bengaluru",
            });
        } else{
            reject("Error : There is a technical problem in the server");
        }
    }, 5000);
});

async function getUserData(){
    try{
        console.log("Fetching user data from database...");
        const userData = await promiseOne;
        console.log(userData);
    } catch(error){
        console.log(error);
    }
}
getUserData();