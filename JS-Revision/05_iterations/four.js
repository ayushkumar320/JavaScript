const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple",
}

// for(const key in myObject){
//     // console.log(key)
//     // console.log(myObject[key])
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }


const programming = ["js", "ruby", "python", "cpp"]
for(const key in programming){
    console.log(key) // gives the index
}
