// Functions in Javascript
// Q-1 What is Function Declarations?
// function sum(num) {
//     return num + num
// }
// It can also called function defination or function statement.

// Q-2 What is Function Expression?
// when we store a function inside a variable , it is called Function Expression.
const sum = function(num) {
    return num + num
}
console.log((sum(4)))    // Anonumous Function        
// refer :https://whiteboard.office.com/me/whiteboards/74914b44-7239-4474-8c90-23a11d4becae

// Q-3 What are First Class Functions?
// In a language where a function can be treated as a variable, those functions are called first class functions. In these case fuctions can be passed another functions, can be used, manipulated and return from those functions. Basically everything that a variable can do a function can also do.
 function square(num) {
    return num * num
}
function displaySquare(fn) {
    console.log("Square is " + fn(6))
}
displaySquare(square);

// Q-4 What is IIFE?
// IIFE - Immedaitely Invoked Function Expression.
(function square(num) {
    console.log( num * num) 
})(5);

// Q-5 IIFE O/P based Question?
(function (x){
    return (function (y){
        console.log(x) // 1
    })(2)
})(1)

// Q-6 Function Scope

// The following variables are defined in the global scope
const num1 = 20,
 num2 = 30,
 name = "Saikrishna";

// This function is defined in the global scope
function multiply() {
  return num1 * num2; 
}

console.log(multiply()); // 600

// A nested function example
function getScore() {
  const num1 = 2,
 num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Saikrishna scored 5"

// Q-7 Function Scope - O/P Based Question
// for (let i = 0; i < 5 ; i++) {
//     setTimeout(function (){
//         console.log(i);
//     }, i * 1000)
    
// }// let creates a new block scope for iteration then the output will be 
// // 0, 1, 2, 3, 4 after every 1 sec
// for (var i = 0; i < 5 ; i++) {
//     setTimeout(function (){
//         console.log(i);
//     }, i * 1000)
    
// }
// var doesnt have block scope so it prints 5, 5, 5, 5, 5 after every 1 sec

// Q-8 Function Hoisting
name1()
function name1() {
    console.log("function Hoisting")
}
// In functions, hoisting works completely different. if we hoist a function, it will call complete function. where as in varaibles it will give undefined.

fnHoist()
function fnHoist() {
    console.log(x)
    var x = 5
    console.log('Func Hoist')
}
// x is undefined because it is hoisted.

//Q-9 Function hoisting O/P based question
var x =21;
var fn = function (){
    console.log(x); // undefined 
    var x = 20;
}
fn()

// Q-10 Params vs Arguments
function square(num) { // num is parameters
    console.log(num * num)
}
square(4) // 4 is arguments


// Q-11 spread vs rest
function multiply(...nums) { // rest operator
    console.log(nums[0] * nums[1])
}
let arr = [5, 7]
multiply(...arr) // spread operator

// Q-12 params vs argument - O/p based question.
// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// }
// fn(5, 6, 3, 7)
// gives error: A rest parameter must be last in a parameter list.
const func = (a, x, y, ...numbers) => {
        console.log(x, y, numbers)
}
func(5, 6, 3, 7, 6, 10, 7);


// Q-13 Callback Function?
// A callback function is a function passed into another function as a argument, which is then invoked inside the outer function to complete some kind of action.

// example:
function greeting (name)  {
    alert("Hello " + name)
}
function processUserInput  (cb)  {
    let name = prompt("Please enter your name.")
    cb(name)
}
processUserInput(greeting)
// eventlistenrs 
document.addEventListener("click", function na(prms){ //function is a callback function

})
// map, reduce, filter, setTimeout all are using callback function.


// Q-14 Arrow functions


// Normal function:
const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

// Arrow function
const addd = (fNum, sNum) => {
    return fNum + sNum
}

// Differences b/w Regular function and Arrow function.

// 1 - Syntax
// regular function uses "FUNCTION" keyword.
// arrow function uses "=>" 

// 2 - Implicit "return" keyword
const adddd = (fNum, sNum) => fNum + sNum

// 3 - arguments
//Regular fn
function fnn(){
    console.log(arguments)
}
fnn(1, 3, 5)// it will assign the values to the arguments

// Arrow fn
// const fnArr = () => {
//     console.log(arguments)
// }
// fnArr(1, 3, 5, 4) // it will show error: arguments is not defined.

// 4 - "this" keyword
let user = {
    username: "Saikrishna",
    rc1: () => {
        console.log("My name is " + this.username) // here 'this' keyword refers to global scope username.
    },
    rc2() {
        console.log("My name is " + this .username) // here 'this' keyword refers to username line:188.
    },
}
user.rc1(); // undefined 
user.rc2(); // My name is Saikrishna