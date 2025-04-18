function sayMyName(){
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

// sayMyName();

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 5);
// console.log(`Result is ${result}`)

function loginUserMessage(username = "User"){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    } 
    else{
        return `${username} just logged in`
    }
}

let message = loginUserMessage();
// console.log(message)

function calculateCartPrince(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrince(200, 500, 700))


const user = {
    username: "ayush",
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))