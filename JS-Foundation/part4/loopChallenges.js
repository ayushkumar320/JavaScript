/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let i1 = 1;
let sum = 0;
while(i1 < 6){
    sum = sum + i1;
    i1++;
}
console.log(sum);


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let j = 5;
let i2 = 0;
while(j>0){
    countdown[i2] = j
    j--;
    i2++;
}
console.log(countdown);

// Can be done as below
/*
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j); // Using array.push
  j--;
}
*/

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = []
// let tea;
// do{
//     tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//     if (tea!== "stop"){
//         teaCollection.push(tea);
//     }
// } while (tea!=="stop");
// console.log(teaCollection);
// Node.js doesnt support prompt, we have to go to browser

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let k = 1;
do {
    total+=k;
    k++;
} while (k<=3);
console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let arr = [2, 4, 6];
let multipliedNumber = [];
for(let index = 0; index < arr.length; index++){
    multipliedNumber.push(arr[index]*2);
}
console.log(multipliedNumber);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for(let c = 0; c < cities.length; c++){
    const myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);