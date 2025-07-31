let score = true
let valueConvert = Number(score);
//console.log(typeof valueConvert) // success converted to number when score is "33"
//console.log(valueConvert) // shows typeof as number but value is diff 
// "33" -> 33 
//"33abc" ->NaN (Not a number)
//null -> 0
//undefined -> NaN again
// true -> 1 , false -> 0


let islogin = ""
let boolean = Boolean(islogin)
//console.log(typeof boolean)
//console.log(boolean)
//1 -> true 
// 0-> false
// "" -> false
//"1t" -> true


let num = null
let numstr = String(num)
//console.log(numstr)
//console.log(typeof numstr)
//33 -> "33"
// converts everthing in string



// *************** Operations *****************

let pvalue = 3
let nvalue = -pvalue
//console.log(nvalue)// converts positive to negative

// all basics we now + - and *
//console.log(2**2)//power 4
//console.log(2/2)// dividing 1
//console.log(2%2)// reminder 0

console.log(2 + "2")// String preferd
console.log("2" + 2)// same here
console.log(2 + 2 + "1")// first it takes number and then appends as string 
console.log("2" + "1" - "2" * "2" % "3") // presedence is * % + -
// Also * converts the String to Number for * % - but not for + *