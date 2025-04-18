let naturalNumber = [1, 2, 3, 4, 5, 6];
let factorial = 1;
for(let index = 0; index<naturalNumber.length; index++){
    factorial = factorial * naturalNumber[index];
}
console.log(`The factorial of 6 is ${factorial}`);