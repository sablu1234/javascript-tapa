console.log("Day 05");

//for loop
//"A for loop is best when we know exactly how many times we need to run a block of code"

/*
for(insilization; condition; update){
    //code
}
*/

for(let count=1; count<= 5; count++){
    console.log("Interation/loop", count);
}

//addition of even number 1 to 100+

let sum = 0;
for(i=1; i<=100; i++){
    if(i%2===0){
        // console.log("i", i);
        // sum = sum + i;
        sum += i;
    }
}

console.log("sum is",sum);

let language = "Javascript";

for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));
}


for(let i=1; i<=3; i++){
    for(let j=0; j<=3; j++){
        console.log("Row",i,"Column",j);
    }
}


// Break and continue
for(let i=1; i<=5; i++){
    if(i===3) break;
     console.log(i);
}

for(i=1; i<=5; i++){
    if(i===3) continue;
    console.log(i);
}


for(let i=1,j=10; i<=   10 && j>=1; i++,j--){
    console.log(i,j);
}

/*
*
* *
* * *
* * * *
* * * * *
*/

for(i=1;i<=5; i++){
    let row= "";
    for(let j=1; j<=i; j++){
        row += "* ";
    }
    console.log(row);

}


//While Loop
// "A While loop runs as long as a given condition is true. Its best when we don't know in advance how many interation are needed"


/*
while(condition){
    //code
}
*/

let counter=1;

while(counter<=5){
    console.log(counter);
    counter++;
}



// Do While
// "A do-while loop ensure that the code execute at least onece before checking the condition".

/*
do{
    //code
}while(codition);
*/

let num=1;
do{
    console.log(num);
    num++;
}while(num<=5);


// Infinite Loop
for(;;){
    console.log("I am looping forever");
}