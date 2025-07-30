/*
Prefer not to use var bacause block scope and functional scope
*/
const empid = 12345 // cannot update 
let empname = "Prathamesh" // better than var 
var empEmail="p@gmail.com" // avoid using var
empcity = "pune" // not good practise
let state  // undefined 

//empid = 1111 // Not Allowed: const cannot be changed

console.log(typeof(empcity));
console.table([empid,empEmail,empname,empcity,state])
