function handleClick(greeting){
    console.log(`Button click with a ${greeting}`);
}

const myBtn2Elem = document.getElementById("myBtn2");

myBtn2Elem.onclick = function(){
    console.log("My button 2 Clicked");
}

myBtn2Elem.onclick = function(){
    console.log("My button 2 Clicked Again");
}

myBtn2Elem.onclick = () => handleClick('hello');

// addEventlistener and removeEventListener

const countBtnElem = document.getElementById('countBtn');

let counter= 0;
const hadleCount = function(){
    console.log("Counter", counter);
    counter++;
}
const greetMe = function(){
    console.log("Thank Yous!");
}

countBtnElem.addEventListener('click', hadleCount)
countBtnElem.addEventListener('click', greetMe)

countBtnElem.removeEventListener('click',hadleCount);

// Dom Content Loaded

//will never run
document.onDOMContentLoaded = function(){
    console.log("Dom Xontent Loaded...");
}

// this will run

document.addEventListener('DOMContentLoaded', function(){
    console.log("Dom Content Loaded...s");
});


// Evenet Object

function handleChange (event){
    console.log(event);

    console.log("Target: ",event.target);
    console.log("Target Name: ",event.target.name);
    console.log("Target Value: ",event.target.value);
    console.log("Event Type: ",event.type);
    console.log("Current Target: ",event.currentTarget);

    console.log(this);
}

const searchElem = document.getElementById('search-id');

searchElem.addEventListener('change', handleChange);