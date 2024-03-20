// Map, Filter and Reduce

// What is map()?
// A map method is used for creating a new array from existing one by applying function to each one of elemnts to first array

const nums = [1, 2, 3, 5]
const multiplyTen = nums.map((num, i, arr) => {
    return num * 10 + i 
    // 1 * 10 + 0
    // 2 * 10 + 1
    // 3 * 10 + 2
    // 5 * 10 + 3
})
console.log(multiplyTen);

// What is filter()?
// A filter method takes each element in an array and it apply contional statement against it, if the elemet returns true the element is pushed into the output array, or else the element doesn't pushed into the output array.
// In-short Filter returns only those elements from the array which fullfills the provided criteria.

const array = [1, 3 , 6, 9, 12, 10, 5]

const morethanfour = array.filter((arr)=>{
    return arr >= 6 
})
console.log(morethanfour)


// What is reduce()?
// The Reduce method reduces an array of values down to just one value. Just like map and filter, reduce also execute the callback for each element of the array.

// syntax: arr.reduce((acc, curr, i, arr) => {}, initialValue)
// If we are not mentionining initialValue it will take 1st element of the array
const val = [1, 2, 3, 4]
const sum = val.reduce((accumilator, currenValue, index, array)=>{
// accumilator - result of previous computation, here the there is no previous computaion so it takes 0 initially
return accumilator + currenValue
}, 0)
console.log(sum);


