// document.getElementById("owl").onclick = function() {
//     alert("Owl was clicked!")
// }


// Modern approach - Event Listener
// document.getElementById("owl").addEventListener("click", ()=>{
//     alert("Owl was clicked");
// });
// Event object

// document.getElementById('owl').addEventListener('click', function(event) {
//     console.log(event)
// });

// Methods to study:
// type, timestamp, preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// Event propagation

document.getElementById('images').addEventListener('click', function() {
    console.log("Clicked inside the ul");
}, false);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log("Clicked owl");
    e.stopPropagation();
}, false);

// true - pehle bahar wala fir andr
// false - pehle andr wala fir bahar


document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked")
}, false);