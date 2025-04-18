// Example 1 - Accessing the DOM Element
document.getElementById("changeTextButton").addEventListener('click', function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is now changed! MAGIC!!";
});

// Example 2 - Traversing the DOM
document.getElementById("highlightFirstCity").addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// Example 3 - Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener('click', function () {
    let coffee = document.getElementById('coffeeType');
    coffee.textContent = "Espresso";
});

// Example 4 - Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click", function() {
    let newOrder = document.createElement("li");
    newOrder.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newOrder); // This creates a bug, how many times we click the button, it will create a new item
});

// Example 5 - Removing DOM Elements
document.getElementById("removeLastTask").addEventListener("click", function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
});

// Example 6 - Event Handling in the DOM
document.getElementById('clickMeButton').addEventListener('click', function() {
    alert("This is an event");
});

// Example 7 - Event Delegation
document.getElementById('teaList').addEventListener("click", function (event) {
    if(event.target && event.target.matches('.teaItem')) {
        alert("You selected : "+event.target.textContent);
    }
});

// Example 8 - Form Handling
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    // Here event and event.preventDefault(); helps us to not reload the form when we click on submit button.
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
});


// Example 9 - DOM Content Load
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domStatus").textContent = "DOM Fully Loaded!";
});

// Example 10 - CSS Classes Manipulation
document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.add("highlight");
});