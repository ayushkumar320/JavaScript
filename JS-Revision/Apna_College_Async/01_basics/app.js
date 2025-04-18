// Async Code

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
}, 4000);
console.log("three");
console.log("four");


// Callback - giving function as an argument to other function. It is also called Higher order function

function sum(a, b){
    return a+b;
}
function calculator(a, b, sumCallback) {
    return sumCallback(a, b);
}
console.log(calculator(4, 11, (a, b) => {
    return a*b;
}));

// Callback hell

// const getData = (1, () => {
//     console.log("getting data1 ....");
//     getData(2, () => {
//         console.log("getting data2 ....");
//         getData(3, () => {
//             console.log("getting data3 ....");
//         });
//     });
// });