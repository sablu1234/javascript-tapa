console.log("Day 06");


// Define and declaraion of function
function printThis(){
    console.log("Printing....");
}

// Call of invoke a function
printThis();

// Function as an expression
let printMe = function(){
    console.log("Print me");
}

printMe();

// Parameters and Arguments
function sum(a, b){
    let result=a+b;
    // console.log(result);
    return result;
}
sum(10,20);

let result = sum(10,14);
console.log(result);

function double(x){
    return 2*x;
}

console.log(double(result));

// Default Parameters
function calc(a, b=10){
    return(2 *(a+b));
}
let resvar= calc(2);
console.log(resvar);

// Rest Parameter
function calculateThis(x, y,...rest){
    console.log(x,y,rest);
}

calculateThis(1,2,3,4,5,6,7,8,9);

// Nested Funciton
function outer(){
    console.log("Outer");
    return function inner(){
        console.log("Inner")
    }
    inner();
}
let retFunc= outer();
console.log(retFunc());

// Callback Function
let toCallBuz =false;
function foo(func){
    console.log("Foo")
    if(toCallBuz){
        func()
    }
    
}

const buz = function(){
    console.log("buz")
}
foo(buz);



// Pure funciton
let greetingMessage = "Hola ";
function greeiting(name){
    return greetingMessage + name;
}

console.log(greeiting('Tapscripts'));
console.log(greeiting('Tapscripts'));
greetingMessage="Namaste ";
console.log(greeiting('Tapscripts'));
console.log(greeiting('Tapscripts'));
console.log(greeiting('Tapscripts'));

// Higher Order Fucntion

function getCamera(camera){
    camera();
}
getCamera(function(){
    console.log("Sony")
})


function returnFunc (){
    return function(){
        console.log("hellos")
    }
}
const retFun = returnFunc();
retFun();

// Arrow function

let greetMe = (greetingMsg) => {
   return greetingMsg + " greet"
}

console.log(greetMe('hola'));


// IIFE (Immediately Invoked function Expression)

(function (count){
    console.log("IIFE", count)
})(1)


// Recursion
// function foo(){
//     foo();
// }

function faceWater(count){
    console.log("Facing water...", count)
    if(count === 0){
        console.log("No more water is left to fetch ....")
        return;
    }
    faceWater(count - 1);
}
faceWater(5);