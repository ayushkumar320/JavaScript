// Creating elements and adding properties

const div = document.createElement("div")

div.className = "main"
div.id = "myId"
div.setAttribute("title", "generated title")
console.log(div)
div.style.backgroundColor = "green"
div.style.color = "white"
div.style.padding = "12px"
// div.innerText = "Chai aur code" // Not preferred
const addtext = document.createTextNode("Chai aur code")
div.appendChild(addtext)

// Abhi tak sab memory me saved tha, isko ab attach krna hoga document me
document.body.appendChild(div)
