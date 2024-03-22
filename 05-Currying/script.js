// Currying in Javascript
// when we convert f(a, b) function into f(a)(b) fuction this is called currying.
// In curryin 1 argument takes at a time and returns a new function expecting the next argument.

function f(a) {
    return function (b){
       console.log(a, b)
    }
}
console.log(f(4)(7))

// Q-1 sum(2)(6)(1)

function sum1(a, b, c) {
    return a + b + c
}
console.log(sum1(2, 6, 1))
function sum(num1) {
    return function (num2){
        return function (num3){
            return num1 + num2 + num3
        }
    }
}
console.log(sum(2)(6)(1)) // explain with one one argument, first expain with sum(2), it gives return function(num2) asks for num2 argument , then sum(2)(6), then sum(2)(6)(1) 

// Q-2 
// evaluate(sum(4)(2)) => 6
// evaluate(multiply(4)(2)) => 8
// evaluate(divide(4)(2)) => 2
// evaluate(substract(4)(2)) => 2
function evaluate (operation){
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b
           else if (operation === "multiply") return a * b
            else if (operation === "divide") return a / b
            else if (operation === "substract") return a - b
            else return "Invalid Operation"
        }
    }
}
console.log(evaluate("sum")(4)(2))
// console.log(evaluate("multiply")(4)(2)) instead of doing this we can make reusable function
const mul = evaluate("multiply")
console.log(mul(2)(6))
console.log(evaluate("divide")(4)(2))
console.log(evaluate("substract")(4)(2))
// make it for all


// Q - 3 Infinite Currying sum(1)(2)(3)....(n)
function addition(a){
    return function (b){
        if(b) return addition(a + b)
        return a;
    }
}
console.log(addition(3)(4)(6)(9)());

//Q-4 Currying vs partial application

//this is an example of Partial Application
function ssum(a){
    return function(b, c){
        // arities: the number of arguments a fuction recieves here b, c are arities.
        return a + b + c
    }
}
const x = ssum(22)
console.log(x(5, 6));
//or
console.log(ssum(12)(9, 6));

// to make this code currying
function suum(n1) {
    return function (n2){
        return function (n3){
            return n1 + n2 + n3
        }
    }
}
console.log(sum(19)(1)(9))


// Q-5 Manipulating DOM
function updateElementText(id){
    return function(content){
        document.querySelector("#" + id).textContent = content
    }
}
const updateHader = updateElementText("heading")
updateHader("This is manipulated using curying");

// Q-6 curry() implementation
 function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args)
        }else {
            return function(...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}
const addd =  (a, b, c, d) => a + b + c + d
const Totalsum = curry(addd)
console.log(Totalsum(2)(3)(8)(9))