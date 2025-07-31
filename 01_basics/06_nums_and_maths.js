/*
const num = 400
console.log(num)

const num2 = new Number(100)
console.log(num2)

console.log(num2.toString().charAt(0))
console.log(num2.toFixed(2)) // gives fraction 100.00

let rnum = 123.899
console.log (rnum.toPrecision(3))// 124
console.log(rnum.toPrecision(4)) // 123.9 gives precison till the given tense 

let hundreds = 1000000
console.log(hundreds.toLocaleString()) // by default gives US standard "1,000,000"
console.log(hundreds.toLocaleString('en-IN')) //Indian standard '10,00,000'
*/

// ++++++++++++++++++ Maths ++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.sqrt(25))
// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,4))


console.log(Math.random()) // random value in between 0 and 1
console.log((Math.random()*10)+1)// but the 2nd digit can be 0 also so add one

//Trick to get a random value in range 
let min = 1
let max = 7 // does not include 7 or max
console.log(Math.floor(Math.random() * (max - min) + min)) // this is the formula for the random value in range 