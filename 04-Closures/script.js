// Closures in Javascript- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// Lexical Scope : The variable defined outside of the fuction can be accessed inside th function. and viceversa will give error.


// example of lexical scope
var userName = "King Saikrishna";

// global scope
function local() {
    //local scope
    console.log(userName)
}
local()

// Viceversa- the variable defined inside the function and accessed outside of the fuction then it leads to an error

// global scope
function local() {
    //local scope
    var userName1 = "King Saikrishna";
}
// console.log(userName1) // userName1 is not defined
local()

// example of closure

//global scope
function nmae() {
    var na = "Saikrishna"
    // inner scope 2
    function displayName() {
        // inner scope
        alert(na);
    }
    displayName()
}
nmae()

// MDN example
function makeFunc() {
    const name = "Mozilla";
    function displayName(num) {
      console.log(name, num);
    }
    return displayName;
  }
  
 makeFunc()(78);

 // refer https://whiteboard.office.com/me/whiteboards/9ec6a5b8-f052-4776-b070-975e29412dca 

// Closure Scope Chain:
// Local scope (Own scope)
// Enclosing scope (can be block, function, or module scope)
// Global scope

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
