const div = document.createElement("div")
const addtext = document.createTextNode("This is a text that I wrote in HTML and will attach in a div via JS")
div.style.backgroundColor = "green"
div.style.color = "white"
div.style.padding = "8px"
div.style.borderRadius = "10px"
div.style.fontFamily = "monospace"
div.appendChild(addtext)
document.body.appendChild(div)