/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let chaiList = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let tIndex = 0; tIndex < chaiList.length; tIndex++){
    if(chaiList[tIndex] === "chai"){
        break;
    }
    selectedTeas.push(chaiList[tIndex]);
}
console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
Store the other cities in a new array named `visitedCities`.
*/

let citiesList = ["London", "New York", "Paris", "Berlin"];
let visitedCities =[];
for(let cIndex = 0; cIndex < citiesList.length; cIndex++){
    if(citiesList[cIndex] === "Paris"){
        continue; // used to skip this iteration
    }
    visitedCities.push(citiesList[cIndex]);
}
console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
Store the numbers before `4` in an array named `smallNumbers`.
*/

let numArray = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numArray) {
    if (num === 4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
Store the other teas in an array named `preferredTeas`.
*/

let differentTea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(const prefTea of differentTea){
    if (prefTea == "herbal tea"){
        continue;
    }
    preferredTeas.push(prefTea);
}
console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000,
};

*/
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000,
};
let cityPopulations = {};
// console.log(Object.keys(citiesPopulation))
// console.log(Object.values(citiesPopulation))
for (const city in citiesPopulation) {
//    console.log(citiesPopulation[city]);
    if(city === "Berlin"){
        break; 
    }
    cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000,
};
let largeCities = {};
for(const pop in worldCities){
    if(worldCities[pop]<3000000){
        continue;
    }
    largeCities[pop] = worldCities[pop];
}
console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let chaiVariety = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
chaiVariety.forEach(function(element) {
    if(element === "chai"){
        return;
    }
    availableTeas.push(element);
});
console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let cityToTravel = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

cityToTravel.forEach(function(city){
    if (city === "Sydney"){
        return;
    }
    travelledCities.push(city);
});
console.log(travelledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let numberList = [2, 5, 7, 9];
let doubledNumbers = [];
for(let key = 0; key < numberList.length; key++){
    if(numberList[key] === 7){
        continue;
    }
    const nums = numberList[key]*2;
    doubledNumbers.push(nums);
}
console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
and stop when the length of the current tea name is greater than 10. 
Store the teas iterated over in an array named `shortTeas`.
*/

let myChai = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortChai = [];
for (const tea of myChai) {
    if (tea.length > 10){
        continue;
    }
    shortChai.push(tea);
}
console.log(shortChai);

