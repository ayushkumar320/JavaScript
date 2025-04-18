const userEmail = ""
if(userEmail){
    console.log("got user email")
}
else{
    console.log("User email is not there")
}

// falsy values
/*
1. false
2. 0
3. -0
4. BigInt 0n
5. null
6. undefined
7. NaN
8. ""
*/

// truthy values
/*
1. true
2. "0"
3. 'false'
4. " "
5. []
6. {}
7. function(){} // empty function
*/

// To check array
const userEmailArray = []
if(userEmailArray.length === 0){
    console.log("Array is empty")
}

// To check object
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Empty Object")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // first value aayegi

// console.log(val1)



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("High") : console.log("Low")