// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter((num) => num > 4)
// const values = myNums.filter((num) => {
//     return num > 4
// })


const values = []
myNums.forEach((num) => {
    if(num > 4){
        values.push(num)
    }
})
console.log(values)