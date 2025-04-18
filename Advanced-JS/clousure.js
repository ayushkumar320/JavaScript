// Clousure - They are functions that remeber the environment in which they are created

// Here the return is remebering the value of counter when it is being returned to the increment variable

function outer(){
    let counter = 4;
    return function() {
        counter++;
        return counter;
    }
}

let increment = outer(); 
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());