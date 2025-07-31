let name = "Prathamesh"
let repo = 10
console.log(`Hi i am ${name} my repo count is ${repo}`)
// Better way to print then using append(+) 

let Name = "Prathamesh-pa"
console.log(Name) //Prathamesh

//another way to declare is 
let game = new String("  prathameshpa    ") //Both are same but if want to know extra properties and functions then use this "inspectpage / console"
console.log(game) // [String: 'prathameshpa']

console.log(Name.indexOf('a')) // 2
console.log(Name.charAt(4)) // h
console.log(Name.split('-')) // [ 'Prathamesh', 'pa' ]
console.log(game.trim())// "prathameshpa" extra space is removed

let url = "https://Prathameshadinwar/prathamesh%20adinawar"
console.log(url.replace('%20','-'))// https://Prathameshadinwar/prathamesh-adinawar

console.log(url.includes('pratham')) // true

console.log(game.toUpperCase()) //PRATHAMESHPA