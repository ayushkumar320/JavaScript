let date = new Date();
const display = (str) => {
    console.log(str, date.toLocaleDateString());
}
let intervalID; // declared global scope
document.querySelector("#start").addEventListener('click', ()=>{
    intervalID = setInterval(display, 1000, "Ayush");
});
document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalID)
});