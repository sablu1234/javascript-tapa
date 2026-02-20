console.log("Day 03");

// Operators - Symble + - * /
// Oparends -x+y
// Expression x =2 / 3+4

let x = 4+5;

// Arithmetic Operators

let f_name = "tapas"
let l_name = "Adhikari"
console.log(f_name + l_name); // output: tapas Adhikari

let a = 10;
let b = 5;
console.log(a + b); // output: 15
console.log(a - b); // output: 5
console.log(a * b); // output: 50
console.log(a / b); // output: 2    
console.log(b-a); // output: -5

console.log(a ** b);
console.log(a % b);


let count = 5;
console.log(count--); // output: 5
console.log(count);

console.log(--count); // output: 7


// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log(c); // output: 15
c -= 3; // c = c - 3
c *= 2; // c = c * 2
c /= 4; // c = c / 4

// Comparison Operators
4 == 5 // false
console.log( 4 ==   5 ); // false
console.log( 3 === '3');
console.log( 3 != '3');
console.log( null === null ); // true
console.log( undefined === undefined ); // true
// Nan = Not a Number


let obj1 = {'name': 'tapascript'};
let obj2 = {'name': 'tapascript'};

console.log( obj1 == obj2 ); // false

4 < 3 // false
4 > 3 // true
4 <= 4 // true
4 >= 5 // false

// Logical Operators
console.log('*** Logical Operators ****');
// && || ?? !
// op1 && op2
console.log( false && false ); // false
console.log( true && false ); // false
console.log( true && true ); // true
console.log( false && true ); // false

console.log( 'Cow' && 'Dog' ); // Dog

4 > 5 && 4 === 6 // false

console.log( false || false ); // false
console.log( true || false ); // true
console.log( true || true ); // true
console.log( false || true ); // true

console.log( 'Cow' || 'Dog' ); // Cow

console.log( !true ); // false


let a1 = null ?? 1; // 1
let a2 = undefined ?? 3; // 3
const a3 = false ?? 'tapascript'; // false
const a4 = 0 ?? 'tapas'; // 0

// conditional (ternary) operator
// condition ? vall : val2

let age =23;
age >= 60 ? "Senior Citizen" : "Not a Senior Citizen";


// Bitwise Operators
console.log('*** Bitwise Operators ****');
// 10 in dedimal
// 10 in 32 bits representation of 0,1
// $ | ^ ~ << >>

15 & 9
1111 & 1001 = 1001 = 1 * ( 2 ** 1) + 0 * ( 2 ** 1) + 0 * ( 2 ** 2) + 1 * ( 2 ** 3)

15 / 2 = 7 (1)
7 / 2 = 3 (1)
3 / 2 = 1 (1)
1 / 2 = 0 (1)

9 / 2 = 4 (1)
4 / 2 = 2 (0)
2 / 2 = 1 (0)
1 / 2 = 0 (1)

15 | 9 = 15
1111 | 1001 = 1111
15 ^ 9 = 6
1111 ^ 1001 = 0110

9 << 2 = 36
1001 << 2 = 100100
9 >> 2 = 2
1001 >> 2 = 10

// grouping operators
console.log('*** Grouping Operators ****');
let p = 1;
let q  = 2;
let r = 3;

console.log( p + q * r ); // 7
p + ( q * r ); // 7
( p + q ) * r; // 9

console.log(" **** type of operator **** ");

typeof("tapas"); // "string"
typeof(false); // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4];
typeof numbers; // "object"
typeof null; // "object"

console.log("*** Instanceof Operator ****");

// object instanceof objectType
