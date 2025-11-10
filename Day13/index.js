"use strict";// if we use "use strict" then in function this=> undefined, but inside arrow function strict not work

console.log("Day 13: the this keyword");

// Global

// when run js=> you find This keyword and window Object

console.log("this at the global ", this);// window

// Object
// function

// Inside of an Object- Implicit Binding

const employee ={
    id: 'A5778',
    fristName: 'Alex',
    lastName: 'B',
    returnThis: function (){
        return this;
    },
    getFullName: function() {   
        return `${this.fristName} ${this.lastName};`
    }
}

console.log("Employee Id ", employee.id);// A5778
console.log("this inside the employee object ",employee.returnThis());
console.log("Constructed Full Name using this ", employee.getFullName());


const tom = {
    name: "Tom",
    age: 7
}

const jerry ={
    name: "Jerry",
    age: 3
}

function greetMe(obj){
    obj.logMessage = function (){
        console.log(`${this.name} is ${this.age} years old!`)
    }
    console.log(obj);
}

greetMe(tom);
console.log(tom.logMessage())

greetMe(jerry)
console.log(jerry.logMessage())



// Inside Fuction
function sayName(){
    console.log("this inside a fucntion ", this);
}
sayName();//window

// standalone fucniton direct window ke output dei jodi "use strict" na thake
function outer(a){
    console.log("this inside a outer function", this);
    return function inner(b){
        console.log("This is inside in inner fucntion", this);
    }
}

const outerResult = outer(5);
outerResult(3);


// Inside the arrow function a jodi "use strict" use kora hoi tobuo widow ke output dekahi

const getFood = () => this;
console.log("this inside the arrow fucntion defined in global scope", getFood());


const food ={
    name: 'mango',
    color: 'yellow',
    getDesc: () => `${this.name} is ${this.color}`,
    // getDesc: function (){
    //     return `${this.name} is ${this.color}`;
    // }
}
console.log(food.getDesc());