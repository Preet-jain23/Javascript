

const name = "preet"
const id = 20

console.log(`My name is ${name} and my id is ${id}`)

const game_name = "cricket_hockey_football"

// console.log(game_name.anchor("cricket"))
// console.log(game_name.bold())
// console.log(game_name.at(10000))
// console.log(game_name.at(-10000))


/*
when we use the .at then
if negative then it will count from the end of the string and 
if positive then it will count from the start of the string

if negative number or positive number its absolute value is greater than the 
length of the string then it will return undefined

*/

// console.log(game_name.charAt(10000))
// console.log(game_name.charAt(10))

/*
Here basically if we give size > then string length or negative it will 
give the empty string
*/

// console.log(game_name.charCodeAt(-1))
// console.log(game_name.charCodeAt(0))


/*
if any value greater that string size or negative then it will return NaN
else it will UTF-16 encoding
*/


let text = "hello"
let arr1 = [" Preet"," and"," Manav"]
let concat_text = text.concat(game_name)
// console.log(concat_text)
// concat_text = text.concat()
// console.log(concat_text)
// concat_text = text.concat(arr1)
// console.log(concat_text)
// concat_text = text.concat(...arr1)
// console.log(concat_text)

/*
  Concat string whatever we passed
  if we pass empty string then it return the simple string like in above we get text
  else if we pass array then it will concat array with , or without , depending on we use the ...
*/


const str1 = "Hello Myself Preet Kumar Jain"
// console.log(str1.endsWith("n"))
// console.log(str1.length)
// console.log(str1[28])
// console.log(str1.endsWith("Jai",str1.length-1))
// console.log(str1.endsWith("Jaisdslk",-400))
// console.log(str1.endsWith("",-400))
// console.log(str1.endsWith("H",-1))

/*
Important Node : Positive always starts with 1 and length also give length accoring to 1 indexing
str[] -> Here inside that we have to use the zero indexing 



1) So if we pass empty string then what the second argument number will passed it will ignore 
it will true
2) if string is not empty and the length is not proper or the matching not happen then it return false
*/


console.log("Blue Whates".includes("blue",3))
console.log("Blue Whates".includes("Blue"))
console.log("Blue  white".includes("   "))

/*
1) .include is case sensitive
2) if whitespace is one space only then it give always true whether in string present or not
3) if whitespace is more than one space then it always give check that no of space in string
*/

