//Stack (Primitive) and Heap (Reference) memory in javascript

let myName = "preet";
let anotherName = myName; // here anotherName is a copy of myName

console.log(myName)
console.log(anotherName)

anotherName = "preet2" // here we are changing the value of anotherName but it will not change the value of myName because it is a copy of myName

console.log(myName)
console.log(anotherName)

