// Two type of datatypes in javascript
// 1. Primitive Datatypes
// 2. Reference Datatypes


//Primitve Datatypes :
//7 Types : String , Number, BigInt, Boolean, Null(Empty), Undefined, Symbol, BigInt

//Arrays , Objects, Functions

/* Use of Symbol*/

const id = Symbol("123")
const id2 = Symbol("123")

// console.log(id === id2) // false because symbol is unique

// console.log(id)
// console.log(id2)


const score = 100
const scorevalue = 100.12
let val

const isloggedin = true
const outsidetemperature = null
let userEmail


const heros = ["Ironman", "Spiderman", "Thor"];
let myObj = {
    name: "preet",
    age: 20,
    isloggedin: true

}

const myFunction = function() {
    console.log("Hello World")
}

console.log("all the datatypes are as follows")
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction) 
console.log(typeof score)
console.log(typeof scorevalue)
console.log(typeof isloggedin)
console.log(typeof outsidetemperature)   
console.log(typeof id2)
console.log(typeof val)

