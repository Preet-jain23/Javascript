//Dates

let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toJSON())
// console.log(mydate.toISOString())
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString())
// console.log(mydate.toString())
// console.log(typeof mydate)

/*
    Important for interview that date is the object
*/



// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(1970,1,1,5,55)
//Here 0 index represent the first month


console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date("01-14-2026")
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2026-10-10")
console.log(myCreatedDate2.toLocaleString())


//How to take time stamp

let myTimestamp = Date.now();// or new Date()
console.log(myTimestamp);
console.log(myCreatedDate1.getTime());

/*
It give the time in millisecond from the one particular(apporx 1976)

*/

console.log(Math.floor(myCreatedDate1.getTime()/1000))
/*
 To convert the current millisecond time to second
*/