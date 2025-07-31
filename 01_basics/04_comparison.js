//console.log(2 > 3)
//console.log(2 < 3)
//console.log(2 >= 2)
//console.log(2 <= 3)
//console.log(2 == 3)
// till here all good if we use same datatype on both side

// problem starts here when it converts but not predictable
//console.log("2" > 1)
//console.log("02"> 1)

//console.log(null > 0) // shows false
 //❓ console.log(null > 0)
//JS converts null to a number → 0
//So it checks: 0 > 0 → ❌ false

//console.log(null == 0) // shows false
//❓ console.log(null == 0)
//This is a loose equality check (==)
//But null only equals undefined, not 0
//So: null == 0 → ❌ false

//console.log(null >= 0) // shows true
//❓ console.log(null >= 0)
//JS converts null to number → 0
//So: 0 >= 0 → ✅ true

//console.log(null == undefined) // shows true
// for >,<,>=,<= it converts the null to 0 
// but for == it is always equal to undefined 

/*
console.log(null >= 0) 
console.log(null <= 0)
console.log(undefined >= 0)
console.log(undefined <= 0)
console.log(null == 0)
console.log(undefined == 0)
*/


// Better to Use "===" as it also checks if same datatype and we had to avoid null

//console.log("2" === 2)


