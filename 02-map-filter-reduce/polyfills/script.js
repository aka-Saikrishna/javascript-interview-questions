// Polyfill for map()

// syntax of map():
// Array.map((num, i, arr)=>{ })

Array.prototype.myMap = function (cb) { //cb- callback
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
        
    }
    return temp;
}
const nums = [1, 2, 3, 5]
const multiplyTen = nums.myMap((num, i, arr) => {
    return num * 10 

})
console.log(multiplyTen);


// Polyfill for filter()
Array.prototype.myFilter = function (cb) { //cb- callback
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i])
    }
    return temp;
}
const array = [1, 3 , 6, 9, 12, 10, 5]

const morethanfour = array.myFilter((arr)=>{
    return arr >= 6 
})
console.log(morethanfour)

// Polyfill for reduce()
Array.prototype.myReduce = function (cb, initialValue){
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i]
        
    }
    return accumulator
}

const val = [1, 2, 3, 4]
const sum = val.myReduce((accumilator, currenValue, index, array)=>{
// accumilator - result of previous computation, here the there is no previous computaion so it takes 0 initially
return accumilator + currenValue
}, 0)
console.log(sum);
