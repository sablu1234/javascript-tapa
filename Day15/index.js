console.log("Day 15 : Javascsript array master courese");

const mixedArray = [100, true, "tapaSript", {}];

// index = the position of an element in the array  is known as its index.
// index start with 0
// indx end with length -1

const salad = ['🍔','😎','❤️','😃','😉','🫥','🫠'];

function Car(model){
    this.model = model;
}

const bmwCar = new Car('BMW X1');

console.log(bmwCar);

const anotherSalad = new Array('🍔','😎','❤️','😃','😉','🫥','🫠');

console.log("Salad", salad);
console.log("Another Salad", anotherSalad);

console.log(salad === anotherSalad);

// amara jodi akta argument dei tobe array careate hobe na, jodi number hoi
// const two = new Array(2);
const two = new Array(1,2);
console.log(two);

// const element = Array[index]
console.log(salad[0]);//🍔
console.log(salad[2]);//❤️
console.log(salad[5]);//🫥


// const salad = ['🍔','😎','❤️','😃','😉','🫥','🫠'];

for(let i=0; i<=salad.length-1; i++){
    console.log(`Element at index ${i} is ${salad[i]}`)
}


// push() - end (add array in end)
// const salad = ['🍔','😎','❤️','😃','😉','🫥','🫠'];
const ret = salad.push('🤷‍♂️');
console.log(ret);
console.log(salad);

//Unshift - start(add array in frist)
const unret = salad.unshift('😒');
console.log(unret);//9
console.log(salad);//['😒', '🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠', '🤷‍♂️']

// pop - end(remove arrry from end)
console.log(salad);
const popRet = salad.pop();
console.log(popRet);//🤷‍♂️
console.log(salad);['😒', '🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠']

// shift - start (যা অ্যারের শুরু থেকে (start থেকে) একটি এলিমেন্ট কেটে বের করে আনে।)
// const salad = ['😒', '🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠']
console.log(salad);//['😒', '🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠']
const shiftRet = salad.shift();
console.log(shiftRet);//😒
console.log(salad);// ['🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠']

// slice() - copy(যেটা অ্যারের কপি তৈরি করার জন্য ব্যবহার করা হয়।)
// const salad = ['🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠'];
const saladCopy = salad.slice()
console.log("Salad before copy",salad);//['🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠'];
console.log("Salad after copy",saladCopy);//['🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠'];
console.log(salad === saladCopy)//false


// 
Array.isArray(['🍔', '😎', '❤️', '😃', '😉', '🫥', '🫠']);//true
Array.isArray(['🍔'])//return false
Array.isArray({'tomato': '🍔'});//return false
Array.isArray([]);//return true


const arr = [1,2,3,4];
Array.isArray(arr);//true


// Array Destructuring
/*
const tomato = salad[0];
const mushroom = salad[1];
const carrot = salad[5];
*/

// [tomato, mushroom, carrot] = ['🍔','😎','🫥'];
// console.log(tomato, mushroom, carrot);


// const [tomato, mushroom = '🍄'] = ['🍅'];
// console.log(tomato);//🍅
// console.log(mushroom);//🍄


// const [tomato, , carrot] = ['🍅','🍄','🥕'];
// console.log(tomato);//🍅
// console.log(carrot);//🥕


// Nested Array 
// [1, 2, 3, [4, [6, 8, ['q']]]]

let fruits = ['🍊','😋','🍌','🍉', ['🍅', '🍄', '🥕']];
const veg = fruits[4];//['🍅', '🍄', '🥕']
console.log(veg);
const carrot = veg[2];//'🥕'
fruits[4][2];//'🥕'

// let[,,,,[,,carrot]] = ['🍊','😋','🍌','🍉', '🍅', '🍄', '🥕'];


// Rest  and Spread(বাকী সব ভ্যালুকে একসাথে (rest) করে একটি অ্যারেতে রাখে।) || Spread(“বাকিগুলোকে collect করা)
// ...

const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(rest);//['🥦', '🥒', '🌽', '🥕', '🥑'];

const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const mySaladCopy = [...mySalad];
console.log(mySalad);//['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

mySalad === mySaladCopy; //false



// Swapping

// let frist = "🙁";
// let second = "😃";

// [frist, second] = [second, frist];

// console.log(frist);//😃
// console.log(second);//🙁


// Merge by spread

// const emotions = ['😃','🙁'];
// const veggies = ['🥦', '🥒', '🌽', '🥒'];
// const emotionsVeggies = [...emotions, ...veggies];
// console.log(emotionsVeggies);


// length
const arr1 = [11,21,73];
const arr2 = new Array(7);
console.log(arr1.length);
console.log(arr2.length);


// 2 ** 32 - 1 //4294967295

arr1.length = 2;
console.log(arr1);//[11,21];

// array nai besi but jodi count besi dei tao empty erray dekahbe
arr1.length = 9;
console.log(arr1);//(9) [11, 21, empty × 7]

// array jodi empty korte chai
arr1.length = 0;
console.log(arr1);



// concat(ar madhome amra akdhik array jog korte parbo aksathe)
const first = [1,2,3];
const second = [4,5,6];
const third = [7,8,9];

const merged = first.concat(second,third);
console.log(merged);//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(first);//[1, 2, 3]
console.log(second);//[4, 5, 6]

// array.concat(arr1,arr2,..,..,..,arrN);


// Join(join a jekono kisu aksathe add kora jabe ata default"," diye add hoi, chaile other separator use kora jabe)
const emotions = ['😃','❤️','🤯','🍊'];
const joined = emotions.join('<=>');
console.log(joined);//😃<=>❤️<=>🤯<=>🍊

[].join()//""



// fill(amara jodi array ar argument akta nirdisto argument a change hobe tahole fill() use korte pari)
const colors = ['red', 'green', 'blue'];
colors.fill("pink",1 ,3);
console.log(colors); 


// Includes(amra jodi dekte chai kono element array ta ase kina tahole ata use korbo) ata (casesencitive)

// const names = ['tom','alex','bob','john'];
// console.log(names.includes("tom"));//true
// console.log(names.includes("july"));//false


// IndexOf and lastIndexOf (particular element array te thakle (index number) dibe, ar na thakle -1 dibe)
// const names = ['tom','alex','bob','tom'];
// names.indexOf("alex")//1
// names.indexOf("rob")//-1

// // lastIndexOf() ami jodi last index chai (orthat last theke check korbe ase kina)
// names.indexOf("tom");//0
// names.lastIndexOf("tom");//3


//Reverse()reverse array mute the main array

// const names = ['tom','alex','bob'];
// console.log(names.reverse('bob'));


// Sort()
// The default sort() method coverts the elemet types into Strings
// The default sort() is ascending.

const names = ['tom','alex','bob'];
console.log("After default sorting: ",names.sort());//['alex', 'bob', 'tom']

const artists = [
    'John White Abbott',
    'Leonardo da Vinci',
    'Charles Aubry',
    'Anna Atkins',
    'Barent Avercamp'
]

console.log("Default sorting of the artists array", artists.sort());

artists.sort(function(a, b){
    return a === b ? 0 : a > b ? -1 : 1
});

console.log('Sort the artist names (Descending)', artists)

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
console.log("Age with default sorting", ages.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1
}));

