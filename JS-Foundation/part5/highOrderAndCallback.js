function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumOfSquares(a,b){
    const val1 = square(a); // Calling sum function in some other function.
    const val2 = square(b);

    return val1+val2;
}

function SumOfCubes(a, b){
    const val1 = cube(a);
    const val2 = cube(b);
    return val1+val2;
}
console.log(SumOfSquares(3,4));

console.log(SumOfCubes(2, 3));

// Here the problem is it is breaking the DRY (Dont Repeat Yourself) Rule as we are calling cube and square functions again and again. To resolve this we can use High-Order Function (by calling the square function or cube function when needed)


function SumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);

    return val1+val2;
}

console.log(SumOfSomething(3, 4, square));
console.log(SumOfSomething(3, 4, cube));