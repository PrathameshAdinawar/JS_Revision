let mydate = new Date();
/*
console.log(mydate.toString()); // Wed Aug 13 2025 11:59:43 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());// Wed Aug 13 2025
console.log(mydate.toLocaleString());// 8/13/2025, 11:59:43 AM
console.log(mydate.toLocaleDateString()); // 8/13/2025
console.log(mydate.toUTCString()); // Wed, 13 Aug 2025 12:01:26 GMT
console.log(mydate.toISOString()); // 2025-08-13T12:03:43.988Z
*/

//let mydateCreated = new Date(2023,0,23,15,3,3); // 1/23/2023, 3:03:03 PM
//let mydateCreated = new Date("2023-01-15"); // 1/15/2023, 12:00:00 AM
// let mydateCreated = new Date("01-05-2023"); // 1/5/2023, 12:00:00 AM
// //console.log(mydateCreated.toLocaleString());

// let myTimestamp = Date.now();
// console.log(myTimestamp); // 1755087800984
// console.log(mydateCreated.getTime()); //1672876800000
// can be used to compare time in booking sites 
 
//console.log(Math.floor(Date.now() / 1000)); //1755089025
// used to print Secounds 

console.log(mydate.getDay());
console.log(mydate.getMonth());