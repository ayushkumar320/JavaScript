// && -> AND - returns true when both are true
// || -> OR - returns true when either is true
// ! -> REVERSE - True changes to false and false changes to true

let isLoggedIn = true;
let isPaid = false;

console.log(isLoggedIn && isPaid);

let isEmailuser = true;
let isGoogleuser = false;

console.log(isEmailuser || isGoogleuser);
console.log(!isEmailuser)