function fibonacciNumber(num){
    if(num === 0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    let nextNum = fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
    return nextNum;
}
let k = fibonacciNumber(10);
console.log(k);