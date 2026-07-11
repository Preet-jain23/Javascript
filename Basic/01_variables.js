const accountID = 1234567890;
let accountName ;
var accountBalance = 1000.50;
accountOwner = "Jane Smith";

//accountID = 10;

accountBalance += 500;
accountName = "Jane Preet"
//accountName += 10

/*
 In above when we add 10 to accountName 
 it will Concatenate the string with number 10 and it will give output as "Jane Preet10" 

*/

//accountName -= 10

/*
 In above when we subtract 10 from accountName 
 it will give output as NaN because we cannot subtract number from string 

*/

accountOwner = "manav"

console.log(accountID)
console.table([accountID, accountName, accountBalance, accountOwner]);

/*

1. When we cannot initialize a variable with a value, it will be undefined.
2. Generally, we cannot use the var keyword to declare a variable
    because it create a problem in functional scope and block scope.

*/

