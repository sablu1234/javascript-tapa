console.log("Day10 - CLouser");

function outer(){
    let x =10;
    return function inner(){
        console.log(x);
    }
}
const func = outer();
console.log(func());




function outerCount(){
    let count = 0;

    return function innerCount(){
        count++;
        console.log(count);
    }
}

const retVal = outerCount();
retVal();// 1
retVal();// 2
retVal();// 3


// Real world Example

function creatBankAccount(initialBalace){
    let balance = initialBalace;


    return{
        deposite : (amount) => {
            balance = balance+amount;
            console.log("Deposite ",amount,"Current Balance", balance);
        },

        withdraw : (amount) => {
            if(amount> balance){
                console.log("Insifficient Fund");
            }else{
                balance = balance - amount;
                console.log("Withdraw ",amount,"Current Balance", balance);
            }
        },

        checkedBalance : () => console.log("Current Balance", balance),
    }
}

const tapaScriptAccount = creatBankAccount(100);
console.log(tapaScriptAccount);
console.log(tapaScriptAccount.deposite(300));//400
console.log(tapaScriptAccount.withdraw(50));//350
console.log(tapaScriptAccount.withdraw(20));//330
console.log(tapaScriptAccount.withdraw(50));//280
console.log(tapaScriptAccount.withdraw(150));//130
console.log(tapaScriptAccount.checkedBalance());//130




function dealingWithBigData (){
    let BigData = new Array(10000000).fill("*")

    return function(){
        console.log(BigData[3])
    }
}

const variable12 = dealingWithBigData();

console.log(variable12())







// Usefulness of Clouser

// 1. You can keep the variable private without exposing them
// 2. you can stop variable polution
// 3. You can create a fucntion factory
// 4. You can keep variable alive between multiple calls

function timer(){
    let secs = 0;

    return function(){
        secs++;

        console.log("elaspsed",secs);
    }
}
const timerInstant = timer();
timerInstant();//1
timerInstant();//2
timerInstant();//3


// Closer is Event handler

function setupButton(){
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function(){
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    })
}

setupButton();