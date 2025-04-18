// setTimeout(function(){
//     console.log("Ayush!")
// }, 2000);

const sayName = () => {
    console.log("Hello!")
}

// setInterval(() => {
//     sayName();
// }, 2000);

// setTimeout(sayName, 2000)


const changeText = function() {
    document.querySelector('h1').innerHTML = "Best JS Series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector("#stop").addEventListener('click', ()=>{
    console.log("Stop")
    clearTimeout(changeMe)
})