// Create an array of square of given array

let domainNumbers = [1,2,3,4,5];
let squaredNumbers = [];
for(const values of domainNumbers){
    let squaredValue = values**2;
    squaredNumbers.push(squaredValue);
}
console.log(squaredNumbers);