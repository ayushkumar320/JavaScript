function addLanguage(langName) {
    let newItem = document.createElement("li");
    newItem.innerHTML = `${langName}`;
    document.querySelector(".language").appendChild(newItem);
}
addLanguage("C++");
addLanguage("TypeScript")


function addOptiLanguage(langName) {
    let newItem = document.createElement("li");
    const addtext = document.createTextNode(langName)
    newItem.appendChild(addtext)
    document.querySelector(".language").appendChild(newItem)
}
addOptiLanguage("Go lang")

// Edit
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Python" // not so optimised
const newLi = document.createElement("li")
newLi.textContent = "Ruby"
secondLang.replaceWith(newLi)

// Edit
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>Typescript</li>'

// remove
const lastLang = document.querySelector("li:last-child")
lastLang.remove()