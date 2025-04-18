// Capitalize the first letter of the given name.
let myName = "ayush";
let firstLetter = myName.slice(0, 1);
firstLetter = firstLetter.toUpperCase();
let length = myName.length;
let lastName = myName.slice(1, length);
console.log(firstLetter + lastName);