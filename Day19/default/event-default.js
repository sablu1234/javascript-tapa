console.log("Event Defaults");

document.getElementById("websiteLink").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Default link  behaviour Prevented!");
})

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form submission prevented!");
})