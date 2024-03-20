// map, filter and reduce - O/P based questions


// Question 1 - Return only name of students in Capital

let students = [
    {name: "Sai", id: 35, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];


// Generic method
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase())
// }
// console.log(names)

// Using map method
const names = students.map((stu) => stu.name.toUpperCase());
console.log(names);



// Question 2 - Return only details of those who age more than 23
let students1 = [
    {name: "Sai", id: 35, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];

const ages = students1.filter((stu) => {return stu.age > 23 })
console.log(ages)


// Question 3 - age  More than 20 and id greater than 25
let students2 = [
    {name: "Sai", id: 25, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];

const details = students2.filter((stu) => {
    return stu.id >25 && stu.age > 20
})
console.log(details)


// Question 4 - Sum of ages of all students

let students3 = [
    {name: "Sai", id: 25, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];
const sumOfAges = students3.reduce((acc, curr) => acc + curr.age, 0)
console.log(sumOfAges)

// Question 5 - Return only names of students who's age greater than or equal to 24
let students4 = [
    {name: "Sai", id: 25, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];

const nameAge = students4.filter((stu) => stu.age >= 24).map((stu) => stu.name)
console.log(nameAge)

// Question -6 Return total ages for students with age > 28 after 20 added to those who age is < 24

let students5 = [
    {name: "Sai", id: 25, age: 23},
    {name: "Krishna", id: 32, age: 24},
    {name: "Ranjeeth", id: 30, age: 30},
    {name: "Abhilash", id: 1, age: 22},
];

const totalOfAges = students5.map((stu) => {
    if (stu.age < 24) {
        stu.age += 20
    }
    return stu
}).filter(stu => stu.age > 28).reduce((acc, curr) => acc + curr.age, 0)

console.log(totalOfAges)