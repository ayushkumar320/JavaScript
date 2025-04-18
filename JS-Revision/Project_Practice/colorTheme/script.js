const body = document.querySelector("body");
const buttons = document.querySelectorAll(".colorBox")
buttons.forEach((eachButton) =>{
    eachButton.addEventListener("click", function(event){
        body.style.backgroundColor = event.target.id;
    })
});