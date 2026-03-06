console.log("Custom event");

// Step 1: Create a custom event
const myEvent = new CustomEvent("userLoggedIn", {
    detail:{
        username: "tapascript",
        role: "admin"
    }
});

// Step 2: Listen to the custom event 
document.addEventListener("userLoggedIn", (e)=>{
    console.log(`User Login Detected ${e.detail.username}`);
})

// Step 3: Dispatching the Custom Event 
document.dispatchEvent(myEvent);



function loginUser(username){
    const event = new CustomEvent("userLoggedIn",{
        detail: {username}
    });
    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn",(e)=>{
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `welcome, ${user}`
});