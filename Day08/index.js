//  Global Execution useContext(GEC)
// Creation phase
// 1.window Object
// 2.this keyword
// 3.window === this

// var name = "Tom";

// function sayName(){
//     console.log(this.name);
// }
// Allocate memory for variable and function sayName()
// 5.name will be initialize by undefined


// GEC
// Creation phase
// name:undefind
// tom(): allocted in memory
var name = "Tom";

function tom(){
    console.log(this.name +'Runs');
}
tom();
// Execution phase
// name:"tom"
// tom: Execute
// FEC(For tom())
// cratetion phase

// execution phase:log() from console
// FEC (for log() from console)
// creation phase
// Execution phase 


console.log("Inside Global Execution Context");
var a =5;
function testMe(){
    console.log("Inside testMe Execution context");
    var b = 10;
    var user = {
        name : "tapas",
        country : "India"
    }
    function testAgain(){
        console.log("Inside testAgain Execution Context ");
        console.log("exeiting testAgain Execution context");
    }
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");



// tasks
// 1. Draw the context Diagram of the following code and share as execution 

GEC 
cp
 message:undefined
 sum allocate in memory
 mul allocate in memory
 calc() allocate in memory
 getResutl() allocate in memory
EC
 message:value allocate
 getResutl:execute
 FEC
 cp
 calc():execute
 FEC (for calc)
 cp
 sum() allocate in the memory
 sum:execute
 FEC(for sum)
 cp
 resutl:undefined
 ep
 result:allocate value
 mul():execute
 FEC(mul() for mul)
 cp
 result:undefined
 ep:
 result:allocate value
 

const message = "I can do it";
function sum(a, b){
    const result = a + b;
    return result;
}

function mul(a, b){
    const result = a* b;
    return result;
}

function calc(){
    return (sum(a,b) + mul(a,b)/2);
}

function getResutl(a,b){
    return calc(a,b);
}

getResutl(8,5);

```

-Create the GEC and FEC with CP and EP flow
- create the stack and heap flow 
- create the stack Diagram
- Create a Readme file with all the above diagram and share on Discord