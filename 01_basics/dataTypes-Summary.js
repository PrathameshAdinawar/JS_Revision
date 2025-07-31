/*

Two Types of DataTypes 
# Primitive
    7 types : Number, String, Boolean, null, undefined, Symbol, BigInt 

*/ 
/*
let num = 3
let name = "Prathamesh"
let islogin = false
let phno = null
let email ; // similar to email = undifined 
let id = Symbol("1234")
let exampleId = Symbol("1234")
console.log(id === exampleId) // False because Symbol() makes it unique
let accno = 124234234234n 
*/

/*
# Reference (Non Primitive)
    3 Types : Array, Objects, functions
*/
/*
const heros = ["shaktiman","Krish", "nagraj"] // Arrays
console.log(heros) 
console.log(typeof heros)// object

const myobj = {
    name:"prathamesh",
    id:22    
} // Any thing in {} is an object it can be any primitives and also another objects
console.log(myobj)
console.log(typeof myobj) // object


const myfun = function(){
        console.log("Hello world")
}
console.log(myfun)
console.log(typeof myfun) //function

*/

//*************************************************** 

/*
    Stack [Primitive]  , Heap[Non-primitive]
*/

let ytchannel = "Prathameshdotcom"
let ytnewchannel = ytchannel
console.log(ytchannel)
console.log(ytnewchannel)

/* Both are stored in stack in stack there is duplicate made no reference 
             [                ]
ytnewchnl->  [Prathameshdotcom]
ytchnl   ->  [Prathameshdotcom]
                   stack
*/

ytnewchannel = "PrathameshCoding"
console.log(ytchannel)
console.log(ytnewchannel)

/*
             [                ]
ytnewchnl->  [PrathameshCoding] //updated
ytchnl   ->  [Prathameshdotcom]
                   stack
*/

let userOne ={
    name:"prathamesh",
    id:"232"
}

let userTwo = userOne

console.log(userOne.name) //prathamesh
console.log(userTwo.name) //prathamesh
/*Both are pointing to same object 
               ----------------------     
    userOne -> | {name:"Prathamesh" |
    userTwo -> |  id: 232 }         |
               ---------------------- 
                        Heap
*/
userTwo.name = "Hitesh"
console.log(userOne.name) // Hitesh
console.log(userTwo.name) // Hitesh
/* 
               ----------------------     
    userOne -> | {name:"Hitesh"     |  
    userTwo -> |  id: 232 }         |
               ---------------------- 
                        Heap 
*/