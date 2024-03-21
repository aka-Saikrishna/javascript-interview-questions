// Closures in Javascript

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
console.log(userName1) // userName1 is not defined
local()

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              