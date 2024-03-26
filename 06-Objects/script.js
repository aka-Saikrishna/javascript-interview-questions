// Objects in Javascript

const user = {
    name: "Saikrishna",
    age: 24,
};

// to access the value inside the object

console.log(user.name)

 // to modify the property
 user.name = "Vallala Saikrishna"
 console.log(user);

 // to delete the property
 delete user.age
 console.log(user)

// Question whats the outPut?
const func = (function (a) {
    delete a;
    return a;
})(5);
console.log(func)

// output is '5'
// Delete keyword is only used when we want to delete a property from an object not local variable.

//to add properties with spaces
const user1 = {
    name: "Saikrishna",
    age: 24,
    "I'm is looking for a job" : true
};
// too acccess this we have to use []
console.log(user1["I'm is looking for a job"]);
// to delete this property
delete user1["I'm is looking for a job"]
console.log(user1)

// How to add dynamic key pair values to object
const property = "firstName";
const name = "Saikrishna"

const user2 = {
    [property]: name // to add dynamic properties we need to give []
}
console.log(user2);

// we have a object we want to loop through each of its keys and print the values - we have to use for-in loop
const newObj = {
    companyName: "Google",
    location: "Hyderabad",
    role: "SDE"
}
for (const key in newObj) {
    console.log(newObj[key])
}
