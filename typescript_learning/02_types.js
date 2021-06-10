"use strict";
/**
 * Primitive types
 */
// number type
function primitive_function01() {
    return 3;
}
// string type
function primitve_function02() {
    return 'hello';
}
// boolean type
function primitive_function03() {
    return true;
}
/**
 * Any
 */
function fct() { }
let obj = { x: 0 };
let arr = ["lol", 0, true];
function any_function01() {
    if (0) {
        return 3;
    }
    if (0) {
        return false;
    }
    if (0) {
        return "hello";
    }
    if (0) {
        return fct;
    }
    if (0) {
        return obj;
    }
    if (0) {
        return arr;
    }
}
/**
 * Arrays
 */
function some_function01() {
    // return [1, 2, 3]; // produce an error.
    return ['hello', 'beautiful', 'world'];
}
function some_function02() {
    return ['hello', 'beautiful', 'world'];
}
/**
 * Type annotation on variable, variable declaration
 */
// some_variable = 'test'; // will produce an error. At declaration, must precise var, let or const
var some_variable01; // ok for declaration
let some_variable02; // ok for declaration
const some_variable03 = 3; // ok for declaration, constant variable must be define.
// type annotation on variable
let some_variable04 = 'hello';
// some_variable04 = 4; // produce error. Type mismatch
let some_variable05;
/**
 * Functions
 */
// parameter type annotation
function some_function03(param) { }
// return type annotation
function some_function04() {
    return new Array(); // without this return, function declaration will produce an error. a return value of type Array<string> is requested
}
/**
 * Anonymous function
 */
let some_function05 = function (param) {
    return new Array();
};
let some_function06 = (param) => {
    return 0;
};
/**
 * Callback function
 */
function some_function07(func) {
    return;
}
// now the called function passed in argument must match signature callback function defined as parameter
// this function does not match type signature of callback function parameter in function_07().
// some_function07((param1 : boolean, param2 : boolean) => { // -> produce mismatch type error
//     return;
// }); 
function callback_function02(param1, param2) {
    return 0;
}
// this function does match type signature of callback function parameter in function_07().
some_function07((param1, param2) => {
    return 0;
});
// same as above, but not with an anonymous function
some_function07(callback_function02);
/**
 * contextual typing
 */
const name_array = ['julie', 'marie', 'bob'];
name_array.forEach(element => {
    // console.log(element.toUppercase());
    // element.toUppercase() will return a any value.
    // will produce an error
    // from Typescript doc : Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.
});
/**
 * Object types
 */
class Coord {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
// Coord type parameter annotation
function printCoord(param) {
    return new Coord();
}
// this works
printCoord(new Coord);
// printCoord(1); // this produce an error, type mismatch
// General object type parameter annotation
function printCoord2(param) {
    return;
}
printCoord2({ x: 0, y: 0 });
// propriety of object mismatch
// printCoord2({a : 0, b : 0}); produce error
/**
 * optional propriety in Object type
 */
function print_name(param) {
    // console.log(param.z / 2); // because 'z' propriety is optional we get an error here  
    // to prevent this, we can use console.log() function in condition
    if (param.last !== undefined) {
        console.log(param.last.toLocaleUpperCase);
    }
    // or with modern JavaScript syntax
    console.log(param.last?.toUpperCase());
    return;
}
print_name({ first: 'john', last: 'doe' });
print_name({ first: 'emily' });
// both match
/**
 * Union type
 */
function some_function08(param) {
    return param;
}
some_function08(0); // work
some_function08('hello'); // work 
// some_function08(false); // -> produce error
/**
 * type alias
 */
// instead of this :
function some_function09(super_long_param) {
    return super_long_param;
}
function some_function10(param) {
    return param;
}
;
// but this will not work with union type
function some_function11(param) {
    return;
}
/**
 * Type assertion
 */
// type assertion 
// document.getElementById return "some" Html elemnet.
// if you know that the Html element retrieved is (for example) a HTMLCanvasElement you can use Type assertion like so :
const myCanvas = document.getElementById('some-id');
// here with the angle bracket (not working with *.tsx file) syntax which is equivalent
const myCanvas2 = document.getElementById('some-id');
// from typscript documentation : 
// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
// const var01 = 'string' as number; // -> produce error : type assertion not possible between string and number.
/**
 * Literal types
 */
let letString = 'hello';
letString;
// -> equivalent to :
// let letString01 : string;
const constString = 'hello';
constString;
// -> equivalent to :
// const constString : 'hello';
// variable 'some_variable6' of type "hello" assigned with value "hello"
let some_variable06 = "hello";
some_variable06 = "hello"; // ok
// some_variable06 = "hi"; // error. some_variable06 is not defined with "hello" string literal type
let password;
password = "password"; // ok
password = "pass"; // ok
password = "pwd"; // ok
// password = "somePassword"; // not ok
function printText(s, alignment) {
    return;
}
printText('hello world', 'right'); // ok
// printText('hello mama', 'bottom'); // not ok : type mismatch
// same with numeric literal
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
// combine type with literal
let some_variable07;
some_variable07 = new Coord(); // ok
some_variable07 = "false coord"; // ok
// some_variable07 = "good coord"; // error not a good literal type value
// boolean literal type
let some_variable08;
let some_variable09;
let some_variable10; // equivalent to boolean type
// infer strict literal type on object propriety
let req1 = { url: "https://google.com", method: "GET" };
req1 = { url: "https://amazon.fr", method: "GET" }; // ok
// req1 = {url: "https://google.com", method: "POST"}; // not ok, we set strict type on method propriety to literal "GET".
// convert entire object to type literal 
let req2 = { url: "https://google.com", method: "GET" };
// req2 = {url: "https://google.com", method: "POST"}; // not ok, all propriety are strict literal type
// req2 = {url: "https://amazon.com", method: "GET"}; // not ok, all propriety are strict literal type
// req2 = {url: "https://amazon.com", method: "POST"}; // not ok, all propriety are strict literal type
/**
 * NULL
 */
function doSomething(x) {
    // console.log("Hello, " + x.toUpperCase()); // because "strictNullCheck" is set to true, this will produce an error like "x is possibly true". As is, We have to handle the case where x is null to remove the error.
}
function doSomething2(x) {
    if (x === null) { // here we handle the case where x is of type null
        return;
    }
    let temp = x.toUpperCase();
    console.log(temp);
    return temp;
}
/**
 * Non null aseertion operator (Postfix !)
 */
function doSometing3(x) {
    console.log(x.toUpperCase());
}
// this way, typescript will not complain about possibility that x can be null, but we must type non-null assertion with caution
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
