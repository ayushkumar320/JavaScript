const score = 300;

const balance = new Number(100)
// console.log(balance)
// console.log(score)
// console.log(balance.toString());

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.log10(32))

// console.log(Math.random()); // [0-1]
let r = (Math.random()*9) + 1;
r = Math.round(r);
// console.log(r);

const min = 10;
const max = 20;

let better = (Math.floor(Math.random() * (max - min + 1))) + min
console.log(better)