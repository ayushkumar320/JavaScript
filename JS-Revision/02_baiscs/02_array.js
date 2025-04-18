const marvel_heroes = ["ironman", "thor", "hulk"]
const dc_heroes = ["batman", "superman", "joker"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const fullArr = marvel_heroes.concat(dc_heroes)
// console.log(fullArr)


const allHeroes = [...marvel_heroes, ...dc_heroes] // used to concatenate 2 or more arrays

// console.log(allHeroes)

const anotherArray = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array)



console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name : "hitesh"})) // interesting