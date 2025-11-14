console.log("Day 13 : the this keyword");

//Global

// this keyword and the window object

console.log("This at the global ",this)//window


// Object 
// Function

// Inside on an object

const employee = {
    id: 65465,
    fristName: "Alex",
    lastName: "B",
    returnThis: function(){
        return this;
    },
    getFullName: function(){
        console.log(`${this.fristName} ${this.lastName}`);
    }
}

console.log("Employedd ID: ",employee.id);
console.log("this inside the employee object", employee.returnThis())
console.log(employee.getFullName())