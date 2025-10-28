console.log("Day 04");

let catchingBuss = false;
if (catchingBuss) {
    console.log("I'll reach home on time");
}else{
    console.log("I will be late to reach");
}

catchingBuss ? console.lgo("I'll reach home on time") : console.log("I will be late to reach");


let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// lets build a grading system
let score = 76;
if (score >= 90) {
    console.log("You got an A");
} else if(score >= 80) {
    console.log("You got a B");
} else if( score >= 70 ) {
    console.log("your got a C");
} else if( score < 70) {
    console.log(" You are Failed");
}


let x = 0;

if (x === 0) {
    console.log("0");
} else if ( x >= 0 ){
    console.log(" X grater than 0");
}else if( x < 0){
    console.log("X less than 0");
}


let condition = true;
innerCondition = false;
if (condition) {
    console.log("outer IF");
    if(innerCondition){
        console.log("Inner if");
    }else{
        console.log("Inner else");
    }
}else{
    console.log("Outer else")

}


let position = 10;
switch (position){
    case 1: 
        console.log("Print 01"); 
        break;
    case 2: 
        console.log("Print 02"); 
        break;
    case 3: 
        console.log("Print 03"); 
        break;
    case 4: 
        console.log("Print 04"); 
        break;
    default:
        console.log("Nothing is matched");
}


let day = 51;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid Day number");
}


let name = 'TapaScript';

switch(name){
    case "TapaScript":
        console.log("Tapascript teaching 40 Days of Javascript.");
        break;
    case "google":
        console.log("Google answers to all searches");
        break;
    default:
        console.log("You are neither google, Nor tapascript");
}


const city = "Bangalor";

switch(city){
    case "Bangalor":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
        console.log("All these in india");
        break;
    case "Newyork":
    default:
        console.log("All these are USA");
}
