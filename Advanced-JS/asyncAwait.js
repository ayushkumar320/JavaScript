function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({name: "chaicode", url: "https://chaicode.com"})
            reject({name: "chaicode", url: "https://chaicode.com"})
        }, 3000);
    });
}

// One way to consume promises: 

/*

fetchUserData()
.then((data) => {
    console.log(data);
})
.catch(() => {
    console.log("Error!");
})

*/


// Other way - modern method:
async function getUserData(){
    // try - .then() ka replacement
    // await me wo promise pass krna h and await tabhi lagega jab function async ho
    // catch - .catch() ka replacement
    try{
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully!");
        console.log("User data: ", userData);
    }
    catch(error){
        console.log("Error fetching data", error);
    }
}
getUserData();