console.log("Days 10");

// 4 types of scope in javascript
// 1.Global scope
// 2.Function scope
// 3.Block scope
// 4.Module scope

// Global scope
// Variable declared outside of any function or block scope
// are in the Global scope

var name = 'Tapas';

function greeting(){
    console.log("Hello, ", name);
}

greeting();

console.log(name);

{
    console.log("Inside block ",name)
}


// Function scope: Variable declare a function are only 
// accessible within that funtion

function toDo(){
    let task = "Learning 40 Days of js";
    console.log(task);
}

toDo();

// console.log(task);



// Blcok Scope: variable declare using let and const inside {} can not be accessed outside the block

// var always function scope
// let and const always block scope

{
    var count = 10;
    console.log(count);
}

console.log(count);


// Scope Chain

let globalVar = "I am a Global Variable";

function outer(){
    let outerVar = "I am a Outer Variable";

    function inner(){
        let innerVar = "I am a Inner Variable";
        
        console.log(outer);//"I am a Inner Variable"
        console.log(inner);//"I ma a Outer Variable"
        console.log(globalVar);//"I am a Global Variable"
    }
    inner();
}
outer();

// console.log(outerVar);



var count = 10;

function outer(){
    // var count = 20;

    function inner(){
        // var count =30;

        console.log(count);//10
    }
    inner();

    console.log(count);//10
}
outer();
console.log(count);//10


// Variable Shadoing

let message = "I am doing great"

function situation(){
    let message = "I am not doing great"
    console.log(message);//"I am not doing great"
}

situation();
console.log(message);//"I am doing great"