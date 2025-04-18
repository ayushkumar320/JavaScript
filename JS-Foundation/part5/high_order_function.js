// Higher Order Function - A function which takes a function as an argument.

function add(a, b, cb){
    let result = a+b;
    cb(result); // here cb is a function whose task is to display the result. Therefore this add is a high order function
}

function showResult(result){
    console.log(result);
}

add(3, 4, showResult);

add(400, 10, (val) => console.log(val*2));