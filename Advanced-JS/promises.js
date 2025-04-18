function fetchData(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let success = true;
            if(success){
                resolve({username: "Ayush", password: "123"});
            } else{
                reject("Error fetching the data");
            }
        }, 3000);
    });
}

// let response = fetchData();
// console.log(response);

fetchData()
    .then((data) => {
        console.log(data);
        return `ayush`;
    })
    .then((value) => console.log(value))
    .catch((error) => {
        console.error(error);
    });