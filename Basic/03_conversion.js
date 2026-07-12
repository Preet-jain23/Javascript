
let somestring = "true"
let someNumber = Number(somestring) // it will convert string to number

// console.log(typeof someNumber)
// console.log(someNumber)

/*
  "String" => Number() => NaN
   "10" => Number() => 10
    empty string => Number() => 0
    "10.314" => Number() => 10.314
    "true" => Number() => NaN
*/

let someNumber1 = "false"
let someBoolean = Boolean(someNumber1) // it will convert number to boolean

// console.log(typeof someBoolean)
// console.log(someBoolean)

/*
    empty string => Boolean() => false
    0 => Boolean() => false
    any other number not equal to 0 => Boolean() => true
    any string not equal to empty string (e.g "false", "true" , "preet" )=> Boolean() => true 

*/

let someNumber2 = null
let someString = String(someNumber2) // it will convert number to string

console.log(typeof someString)
console.log(someString)

/*
    01a => String() => "01a"
    undefined => String() => it give some error undefined is not defined
    if someNumber2 is not defined then it will give output as "undefined"
    someNumber2 = 10 => String() => "10"
    someNumber2 = NaN => String() => "NaN"

*/



