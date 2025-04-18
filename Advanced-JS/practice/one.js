function fetchUserData(){
    return new Promise((resolve, reject) => {
        let error = true;
        setTimeout(() => {
            if(!error){
                resolve({
                    username: "ayushkumar320",
                    age: 19,
                    isLoggedIn: true,
                    city: "Bengaluru",
                });
            } else {
                reject(`Error : There was a technical failure.`);
            }
        }, 3000)
    });
}

async function getUserData(){
    try{
        console.log("Fetching data.....");
        const userData = await fetchUserData();
        console.log("Fetching was successful, here are the details");
        console.log(userData);
    } catch(error){
        console.error(error);
    }
}

getUserData();