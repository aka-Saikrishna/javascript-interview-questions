// Q-1 - What is the output
const obj = {
    a: "one",
    b: "two",
    a: "three"
}
console.log(obj) // {a: 'three', b: 'two'}
// If we have two keys with the same name the first key is replaced with the other key.


// Q-2 - create a fn that multiplies all numeric property values by 2
let nums = {
    a: 100,
    b: 200,
    title: "my nums"
};
multiplyByTwo(nums)
// solution
function multiplyByTwo (obj)  {
    for (key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2
        }
    }
}
 console.log(nums);

// Q-3 whats the output?
const a = {};
const b = {key: "b"}
const c = {key: "c"}

a[b] = 123;
a[c] = 456;

console.log(a[b]) //456
// console.log(a) 

// when we try to convert object to string forcefully it will convert to [object, object]
// a[b] is converted to a["[object object]"]
// a[c] is converted to a["[object object]"]
// atlast both are same so, If we have two keys with the same name the first key is replaced with the other key.

// Q-4 what's JSON.stringify and JSON.parse?
const user = {
    name: "SAI",
    age: 23
};
 
const strObj = JSON.stringify(user);
//converts keys into string
 localStorage.setItem("test", strObj)

console.log(strObj) //{"name":"SAI","age":23}
// doing this we cannot access the object properties and values.
// to convert back
// console.log(JSON.parse(strObj))  //{name: 'SAI', age: 23}

console.log(JSON.parse(localStorage.getItem("test"))) // {name: 'SAI', age: 23}


// Q-5 What's the output
console.log([..."Saikrsihna"]) // "S", "a, "i", "K", "r", "i", "s", "h," "n", "a"

//Q-6 What's the output
const user1 = {
    name: "Kyle",
    age: 22
}
const admin = {
    admin: true,
    ...user1
}
console.log(admin) // {admin: true, name: 'Kyle', age: 22}

// Q-7 What's the output
const settings = {
    username: "Sai",
    level: 40,
    rank: 9,
}
const data = JSON.stringify(settings, ["level", "rank"])
console.log(data) //{"level":40,"rank":9}

//Q-8 What's the output

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    }, // when we call this function it will take reference to the object "shape", 
    perimeter: () => 2 * Math.PI * this.radius // But when we call this function "this.radius" will take reference to window object
}
console.log(shape.diameter()) // 20
console.log(shape.perimeter()) //NAN

// Q-9 what is destructuring in objects?
let user2 = {
    name: "king martin",
    age: 30,
    fullName: {
        first: "sai",
        last: "krishna"
    },
};

// how to rename the value
const name = "Saikrishna"
const {name: myName} = user2
console.log(myName)

let {fullName: {first}} = user2 
console.log(first)


// Q-10 what the output
// function getItems(fruitList, ...args, favoriteFruit){ 
//     return [...fruitList, ...args, favoriteFruit]
// }
// getItems(["banana", "apple"], "pears", orange)

// A rest parameter must be last in a parameter list.
function getItems(fruitList, favoriteFruit,  ...args){ 
    return [...fruitList, ...args, favoriteFruit]
}
console.log(getItems(["banana", "apple"], "pears", "orange"));

// Q-11 Object referencing question
let p = {greeting: "Hey!"}
let q;

q = p;
p.greeting = "Hello"
console.log(q.greeting) //Hello
// q= p means not a copy of p, but we have assigned the reference of that object. whatever we change in "p" it will change in "q"

//Q-12 
// console.log({a: 1} == {a: 1}) // false
// console.log({a: 1} === {a: 1}) //false
// in 1st consle both have different memory space so if we compare with == or === both are false

//Q-13
let person = { name: "johnson"}
const members = [person] // members[0]
// person = null
// if we do like this then there is a change
person.name = null // 0: {name: null}
console.log(members) // 0: {name: "johnson"}


// Q-14
const value = {number: 10};

const multiply = (x = {...value}) => { // here it will clone the object , not reference of the object, so the output is 20
    console.log(x.number *= 2)
}
multiply() // 20
multiply() //20
multiply(value) // 20
// it will take the reference of the object it will modify value from 10 to 20, if we call the function again it will be 20 * 2 = 40
multiply(value) // 40

// Q-15
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50
    }
    return person
}
const personObj1 = {
    name: "Alex",
    age: 30
}
const personObj2 = changeAgeAndReference(personObj1)
console.log(personObj2)


// Q-16 What is Shallow copy and Deep copy?
//Shallow copy: when one object holds the reference of the another object then it is called Shallow copy.
//Deep copy: when one objectcompletely clone the another object then it is called Deep copy. We dont have any references to the  original object.

// how to clone a object

let mem = {
    name: "uueyen",
    height: 140
}
// const objClone = Object.assign({}, user) // method -1
// const objClone = JSON.parse(JSON.stringify(user))
const objClone = {...user}
objClone.name = "sai"
console.log(mem, objClone)