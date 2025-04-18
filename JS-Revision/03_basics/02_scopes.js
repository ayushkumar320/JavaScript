

// {} is called a scope, either in function or in if else NOTE: Dont confuse with object wo object declaration hai
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER:",a)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"; 
    function two(){
        const website = "youtube"; // it is a global scope for two()
        console.log(username);
    }
    // console.log(website) it is not in the scope of one()
    two()
}
one()


if (true) {
    const username = "hitesh";
    if (true){
        const website = "youtube";
        console.log(username)
    }
    // console.log(website)
}


// ++++++++++++++++++ INTERESTING ++++++++++++++++++
console.log(addOne(5));

function addOne(num){
    return num+1;
}


addTwo(); // Can not have hoisting property as it is stored in a variable

const addTwo = function(num) {
    return num + 2;
}
