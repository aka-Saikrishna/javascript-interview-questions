// Scope: A scpe is the certain region of the program where a define variable exists and can be recognized and beyont that it cannot be recognized.

function name(params) {
    
}// Functional scope: Variables defined inside a function are not accessible (visible) from outside the function.

{

} // Block scope: Variables declared inside a { } block cannot be accessed from outside the block. 'let' and 'const' are block scope.
// ex:
{
    // let a = 1
    // console.log(a)
}
// ex:
{
    // const b = 2
    // console.log(b)
}
// ex:
{
    // let c = 1
}
// console.log(c) // Uncaught ReferenceError: c is not defined
// ex:
{
    // const d = 2
}
// console.log(d) // Uncaught ReferenceError: d is not defined

/* Global scope: Variables declared Globally (outside any function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.*/
//ex:
// var a = 5 ;
// console.log(a)
// ex:
{
    // var b = 7
}
// console.log(b)


// Local scope: Variables declared within a JavaScript function, are LOCAL to the function. They can only be accessed from within the function.



// Variable Shadowing

// function shadowing() {
//     let a = "Roadside Coder"
//     if(true) {
//         let a = "shadowing"
//         console.log(a)
//     }
//     console.log(a)
// }

//  shadowing()


// function illegalShadowing() {
//     var a = "You can shadow"
//     let b = "Roadside Coder"
//     if(true) {
//         let a = "shadowing"
//         // var b = "Cannot shadow, variable cannot redeclared"

//         console.log(a)
//         console.log(b) // Identifier 'b' has already been declared
//     }
//     console.log(a)
//     console.log(b)
// }
// illegalShadowing()
// We can do shadowinf from var to let but not viceversa. Its illegal.
// variable shadowing is an extension for scoping question.


// Declaration:
// var a;
// var a;
// var a;
// we can re declare same identifier as many times as we want using 'var'

// let a;
// let a; //Identifier 'a' has already been declared

// const a; Missing initializer in const declaration.

// Declaration without initialization
// var a;
// let b;
// const c = 4; 
// for var and let we can declare it without providing any value.
// But for const we have to do both decalration and initialization.

// Re-Initialization

// var a = 5
//  a = 6;

//  let b = 7
//  b = 8

//  const d = 9
//  d = 5 //TypeError: Assignment to constant variable.
 
 // We can re-initialize 'var' and 'let' but we cannot re-initialize const it will give error.


 // Javascript Execution Context - https://whiteboard.office.com/me/whiteboards/e6405ece-8ff5-4928-bb79-22856a0fbbc0
 // It has two phases creation phase and execution phase


//  Hoisting
// During creation phase js engine move variable and function declarations to the top of the code. This is known as hoisting.
// Var
// console.log(a);
// var a = "hello"

// How js engine see this code :
// var a;
// console.log(a)
// a = "hello";

//Let

// console.log(b);
// let b = 2
//ReferenceError: Cannot access 'b' before initialization

// Lets understand hoisting wth an example
function abc() {
    console.log(a, b, c)
    var a  = 10;
    let b = 20;
    const c = 30
}
abc()

// let and const also get hoisted but its in the Temporal Dead Zone
// var will show hoisted output in the console itself but let will showw ReferenceError: Cannot access 'b' before initialization they are hoisted, we can check them by keeping debugger at console.log() in the sources tab in the inspect.