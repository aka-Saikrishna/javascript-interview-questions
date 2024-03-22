// Closure
// Q-1 What will be logged to consloe?

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1 // shadowing
        console.log(count) //1
    }
    console.log(count) // 0
})();

// Q-2 Write a function that would allow you yo do this
function createBase(num) {
    return function (innerNum){
        console.log(innerNum + num) ;
    }
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// Q-3 Time Optimization
 function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * 1 
    }
    return function(index){

        console.log(a[index]);
    }
 }
 const closure = find()
 console.time("6");
 find(6);
 console.timeEnd("6")
 console.time("12");
 find(12);
 console.timeEnd("12")

 // Q-4 Block scope and setTimeout
//  function a(){
//  for(var i = 0; i<3; i++){
//     setTimeout(function log(){
//         console.log(i)
//     }, i * 1000)
//  }
// }
// a();

// 3,3,3 after every sec. Because var doesn't have block scope, it has function scope.
/* first time it runs where 
i = 0, setTimeout only runs after complete code runs successfully.
then we have refernce that i=0 
then i = 1, then i = 2 then i = 3 it will come out of the loop
last time js engine encounter the value of i = 3 
so it prints 3, 3, 3 after every 1 sec
*/

function a(){
    for(let i = 0; i<3; i++){
       setTimeout(function log(){
           console.log(i)
       }, i * 1000)
    }
   }
   a();

// 0, 1, 2 is the output.
/* let is the block scoped,
{
    i =0 
}
{
    i = 1
}
{
    i = 2
}
everytime completely different block is used. After succecfully run the code, it will go to each block scope and prints the value
*/
   

// Q