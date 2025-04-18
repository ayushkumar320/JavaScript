const promiseOne = new Promise((resolve, reject) => {
    let error = true;
    setTimeout(() => {
        if(!error){
            resolve({username: "Ayush", age: 19});
        }
        else{
            reject(`Error : 404`);    
        }
    }, 1000)
}).then((user) => {
    console.log(user.username);
}).catch((error) => {
    console.log(error);
});