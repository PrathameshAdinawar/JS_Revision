//const myarr = [0,1,2,3,4,5]
// console.log(myarr); // [0,1,2,3,4,5]
// console.log(typeof myarr); // Object


// myarr.push(6) //[ 0, 1, 2, 3, 4, 5, 6 ]
// console.log(myarr);

// myarr.pop(6) // [ 0, 1, 2, 3, 4, 5 ]
// console.log(myarr);

// myarr.unshift(8)
// console.log(myarr); // [ 8, 0, 1, 2, 3, 4, 5 ]

// myarr.shift()
// console.log(myarr); // [ 0, 1, 2, 3, 4, 5 ]


//console.log(myarr.includes(4)) // true or false




/*                     Slice and Splice                       */

const myarr2 = [1,2,3,4,5]

let a = myarr2.slice(1,3)
console.log("a",a);           // a [ 2, 3 ]
console.log("myarr2",myarr2) // myarr2 [ 1, 2, 3, 4, 5 ]

let b = myarr2.splice(1,3)  
console.log("b",b);          // b [ 2, 3, 4 ]
console.log("myarr2",myarr2) // myarr2 [ 1, 5 ]
// Slice doesnot modify the original array only gets the part of it 
// Splice does modify the original array and fets the part of it with ending index 