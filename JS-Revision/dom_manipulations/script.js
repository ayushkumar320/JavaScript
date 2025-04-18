const h1 = document.createElement("h1")
const addtext = document.createTextNode("Welcome to DOM Manipulations")
h1.appendChild(addtext)
document.body.appendChild(h1)
const ul = document.createElement("ul")
document.body.appendChild(ul)
const li = document.createElement("li")
const myUl = document.querySelector("ul")
const newItem = document.createTextNode("First Item!")
li.appendChild(newItem)
myUl.appendChild(li)


function addNewItem(item) {
    const li = document.createElement("li")
    const addText = document.createTextNode(item)
    li.appendChild(addText)
    document.querySelector("ul").appendChild(li)
}
addNewItem("Python")
addNewItem("Python")
function removeLastItem() {
    document.querySelector("li:last-child").remove()
}
removeLastItem()
