// const tinderUser = new Object() // This is an example of singleton object

const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "hitesh",
            lastname: "choudhary",
        }
    }
}

// console.log(regularUser.fullname.userfullname) // Dot laga ke access krte jaao

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gamil.com",
    },
    {
        id: 2,
        email: "a@gmail.com",
    },
]

// console.log(users[0].id)
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseinstructor: "hitesh", 
}

// course.courseinstructor
// Destructuring

// const {courseinstructor} = course
// console.log(courseinstructor)

const {courseinstructor : instructor} = course
console.log(instructor)

// Below is a JSON
// {
//     "name": "Ayush";
//     "coursename": "JS in Hindi";
//     "price": "FREE";
// }
