console.log("Event Bubbling, Capturing and Deligation");

// In Event Bubling, the event starts from the target element and bubbles up through its ancestors

//The Flow is: Child -> Parent -> Grandparent -> Document

// Bubling

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("child Clicked");
});


// Capturing

// In event Capturing, the Event Flow from the outmost ancester down to the target element.Its happen before the actual target handles the event.

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Captured Grandparent Clicked");
},true);

document.getElementById("parent").addEventListener("click", () => {
    console.log("Captured parent Clicked");
},true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Captured child Clicked");
},true);


// Event Delegation - It is a technique where you add a single listener to a parent element, Instead of adding individual event listener to all its children

document.getElementById("itemList").addEventListener("click", (event)=>{
    if(event.target.tagName == "LI"){
        console.log(`You clicked on ${event.target.textContent}`);
    }
    console.log(event)
})


// Event stop Propagation

document.getElementById("father").addEventListener("click",()=>{
    console.log("Parent Clicked");
});

document.getElementById("son").addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Child Clicked");
});