let accountId = "12345"
const accountMail = "rishi@gmail.com"
var accountPass = "567890"
accountKey = "909090"

// var is avoided because of scope 
// use of let and const is peffered
// console.table is used to display in tabular form 
// you cannot change const value 
console.log(accountId)
console.table([typeof(accountId) ,typeof (accountMail) ,typeof( accountPass ), typeof(accountKey)])