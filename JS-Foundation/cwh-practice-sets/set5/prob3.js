// Filters for number divisible by 10 from an array

let givenNumbers = [11, 30, 20, 45, 64,70, 80];
let filteredValues = [];
for(const key of givenNumbers){
    if(key%10 == 0){
        filteredValues.push(key)
    }
    else{
        continue;
    }
}
filteredValues.sort();
console.log(filteredValues);