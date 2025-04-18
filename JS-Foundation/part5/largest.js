// Write a function which gives the largest of string from an array

let arr = ["apple", "mango", "banana", "pomogranate"];
let largestWord = 0;
let large;
for(let i = 0; i<arr.length; i++){
    if(arr[i].length > largestWord){
        largestWord = arr[i].length;
        large = arr[i];
    }
}
console.log(large);