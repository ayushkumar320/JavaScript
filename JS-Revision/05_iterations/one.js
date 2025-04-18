// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element === 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}   


for(let i = 0; i < 10; i++){
    // console.log(`Outer loop ${i}`)
    for(let j = 0; j< 10; j++){
        // console.log(`Outer loop value ${i} inner loop value ${j}`)
    }
}

let myArray = ["flash", "batman", "superman"]

for(let index = 0; index < myArray.length; index++){
    // console.log(myArray[index])
}

// Keywords
// 1. break 

// for(let i = 1; i<=20; i++){
//     if(i === 5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


// 2. continue         

for(let i = 1; i<=20; i++){
    if(i === 5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of i is ${i}`);
}