// 'this keyword in Javascript (Implicit Binding)
// Expalin 'this' keyword?

this.a = 5
// console.log(this.a)

// inside function
function getParams(){
    console.log(this.a)
}
getParams();

const getparam = () => {
    console.log(this.a)
}
getparam()
// both regular and arrow function works same here but lets check the same in objects

// using normal function
let user = {
    name: "Sai",
    age: 24,
    getDetails() {
        console.log(this.name)
    }
}
user.getDetails()

// In nested object 

let user1 = {
    name: "Sai",
    age: 24,
    childObj: {
        newName: "Programmer",
        getDetails() {
            console.log(this.newName, "and" , this.name)
        }
        // regular function will point only to the immdediate parent
    }
}
user1.childObj.getDetails();

// with arrow function

let user2 = {
    name: "Sai",
    age: 24,
    getDetails: () => {
            console.log(this.name)
        }
        // it will point to the window object so the is no variable defined with name. So, it will print nothing.
}
user2.getDetails();

// nested arrow function inside a regular function
let user3 = {
    name: "Sai",
    age: 24,
    getDetails () {
           const nestedArrow = () => console.log(this.name)
           nestedArrow()
        }
         // regular function will point only to the immdediate parent so here it is "user3"
}
user3.getDetails();

 
// how this keyword perform in a class or in a constructor

class user4{
    constructor(n){

    }
}