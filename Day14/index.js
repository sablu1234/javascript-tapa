console.log("Day 14 : Error Handling");

// What are we going to learn

// 1.Different type of error in javascript
// 2.try...catch syntax and flow 
// 3.Real-World use cases with try...catch
// 4. Throwing error 
// 5. Rethrowing Error
// 6. The try...catch finally
// 7. Creating custom error
// 8.Self Assignment operators


///////////////////////////////////////////////////////////////
// javascript 2 type error
// 1.parsing error - 
// 2.runtime error - 

// What is an Exception in Jvascript
// ANS: Exceptions are runtime errors that disrupt program exception

// Example

// console.log(x);//ReferenceError: x is not defined

// let obj = null; 
// console.log(obj.name);//TypeError: Cannot read properties of null

// console.log("hi" //SyntaxError:

// let arr = new Array(-1);//RangeError

// decodeURIComponent("%"); //URIError

// eval("var a = ;");// EvalError


// try...catch

try{
    // logic or code
}catch(err){
    // handle error
}

/*
    1.code inside try gets executed.
    2.If no error in try block, the catch block will be ignored and will not be excuted.
    3. If there is an error in the try block, the execution of the try block will be suspended and the controll will move to the catch block. In the catch block you can find the error details and do the needful.
*/


try{
    console.log("execution start here");
    abc;
    console.log("execution ends here");
}catch(err){
    console.error("An Error has occured ", err);

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}


// Real-world use cases

function divideNumebrs(a,b){
    try{
        if( b === 0){
            const err = new Error("Division by Zero is not allowed.");
            throw err;
        }
        const result = a/b;
        console.log(`The result is ${result}`);

    }catch(error){
        console.error("Got a Math Error:", error.message);
    }
}

divideNumebrs(15, 3);
divideNumebrs(15, 0);



const person ={
    name: "Tapas",
    address: {
        city: "Bangalore"
    }
}

function getPostalCode(user){
    try{
        console.log(user.address.country.postalCode);
    }catch(error){
        console.error("Error accessing property: ", error.message);
    }
}

getPostalCode(person);



function validateAge(age){
    try{
        if(isNaN(age)){
            throw new Error(`Invalid input: Age must be a number.Your input is ${age}`);
        }
        console.log(`User's age is: ${age}.`)
    }catch(error){
        console.error("Validation Error: ", error.message);
    }
}

// validateAge('tapas');


// Rethrow

try{
    //Do something with logic and code
}catch(error){
    //Do something with the error
}

function validateForm(formData){
    try{
        if(!formData.username) throw new Error("User name is Mandatory");
        if(!formData.email.includes("@")) throw new Error("Invalid Email format!");
    }catch(error){
        console.error("validation Issue Found: ", error.message);
        throw error;//rethrow
    }
}  

try{
    validateForm({username: "Tapas", email: "bademail"})
}catch(error){
console.error("Showing user error message for user creation", error.message);
}


// try-catch-finally

try{
// code that may throw an error
}catch(error){
// Code to handle the error
}finally{
//  Code that always runs (cleanup actions)
}

function processInformaiton(information){
    try{
        console.log("Processing informaion...");
        if(!information) throw new Error("No information available to process");
        console.log("Information Processed");
    }catch(error){
        console.log("Error", error.message);
    }finally{
        console.log("Cleanup: Closing database connection");
    }
}

processInformaiton()



// Custom error

function ValidationError(message){
    this.name = "ValidationError";
    this.message = message;
    this.stack = new Error().stack;
}
//jodi stack ar value nite chai tobe niser ai line dite hobe
ValidationError.prototype = Object.create(Error.prototype);

function validationCitizen(age){
    if(age<60){
        throw new ValidationError("You are not a senior citizen");
    }
    return "Your are a senior citizen";
}

try{
    const message = validationCitizen(45);
    console.log(message);
}catch(error){
    console.error(`${error.name}: ${error.message} ${error.stack}`);
}


// Self assignment operator ?=

let x;
let y = 10;

x ?= 20; //x is undefinde, so x becomes 20
y ?= 30; // y is already 10,so y remains 10

console.log(x); //output: 20;
console.log(y); // output: 10; 