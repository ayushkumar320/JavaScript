const parent = document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children)

// One way is to convert the HTML Collection to Array
/*

const convertedToArray = Array.from(parent.children)
convertedToArray.forEach((item) => {
    item.style.color = "orange";
    item.style.backgroundColor = "green";
    item.style.borderRadius = "3px";
    item.style.padding = "3px";
    item.style.marginBottom = "4px";
})

*/

// Or we can access by indexing values

// for(let i = 0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML);
// }
parent.children[1].style.color = "orange"
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

const day1 = document.querySelector(".day")
// console.log(day1);
// console.log(day1.parentElement)
// console.log(day1.nextElementSibling)

console.log("NODES : ", parent.childNodes)