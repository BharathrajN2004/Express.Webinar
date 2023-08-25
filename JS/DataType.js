// Declarations

/*
            VAR
Declares a variable, optionally initializing it to a value.
*/

var variable;
// console.log(variable);
variable = 200;
// console.log(variable);
variable += 100;
// console.log(variable);


/* 
            LET
Declares a block-scoped, local variable, optionally initializing it to a value.
*/

let undefinedVar = null;
// console.log(undefinedVar);
let letVariable = 100;
for (let p = 0; p < 2; p++) {
    let letVariable = 10;
    // console.log("letVariable inside block scope : " + letVariable.toString());
    letVariable += 10;
}
// console.log(`letVariable outside block scope: ${letVariable}`);


/*
            CONST
Declares a block-scoped, read-only named constant.
It only prevents re-assignments, but doesn't prevent mutations.  --> Will see soon
*/
const unchangeable = 50;
try {
    unchangeable = 100;
}
catch (error) {
    // console.log(`Error Name : ${error.name}\n Error Message : ${error.message}`);
}
// catch ({ name, message }) {
//     console.log(`Error Name : ${name}\nError Message : ${message}`);
// }
// console.log(unchangeable);


/*
            ALL DATA TYPES
*/

// Number
var int = 50;
let negativeInt = -50;

var double = 50.00;
let negativeDouble = -50.49;

/* Numeric literals with absolute values equal to 2^53 or 
   greater are too large to be represented accurately as integers.ts(80008)
   Binary numeric literal "23424...'n'"
*/
var longInt = 9999345345345345;

// console.log(`Integers : ${int, negativeInt} : ${double, negativeDouble} : ${longInt}`)

// Functions for int
const fixed = double.toFixed(1);

// console.log(`Fixed : ${fixed}`);

// String
var string1 = "Hello EveryOne";
var string2 = "Welcome to the webinar";

// console.log(string1 + string2);
// console.log(string1.replace("l", "*"));
// console.log(string2.split(" "));
// console.log(string2.length);

// Array
var array = ["hi", "hello", "how",];
var numberArray = [2, 2.00, 3, 3.145, -30];
var mixedArray = ["mixed", 3, -30, 3.0125, "with"];

var mapedArray = array.map((value, index) => value + 10);
var filteredArray = mixedArray.filter((value) => typeof value == "string");
// mixedArray.forEach((value, index) => console.log(value, index));
// same as before
for (let instance in mixedArray) {
    // console.log(instance);
}
// same as before
Array.from(mapedArray);

// console.log(mapedArray, filteredArray);

// Map 
var map = { "name": "Bharathraj", "age": 19 };

/* about const property */
map.age = 18;

var entries = Object.entries(map);
var objMap = new Object(map);

/*Its not for Object Map*/
new Array(23);
new Number(100);

// console.log(map, entries, objMap);
// console.log(typeof map, typeof entries, typeof objMap);

