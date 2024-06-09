let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
 // in this method months start from 0 and when double digit is given then they start from 1
let myCreatedDate = new Date(2023 , 0 , 23) 
console.log(myCreatedDate.toLocaleString());

let dateNew = new Date("2023-01-23")
console.log(dateNew.toLocaleString);

let myTimeStamp = Date.now()

console.log(myTimeStamp);

// yet to be explored