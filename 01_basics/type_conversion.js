let numm = "33"

console.log(numm)
console.log(typeof numm)

let valueInNumber = Number(numm)
console.log(valueInNumber)
console.log(typeof valueInNumber)


numm = "33abc"
// this should not be converted into number but it is done and shows us NaN so we should check the cases that cn be input 
valueInNumber = Number(numm)
console.log(valueInNumber)
console.log(typeof valueInNumber)


// for any conversion we use function with the name of datatype starting with capital 
// for boolean 
// for 0 it is false and for 1 it is true 
let isLoggedIn = 0
boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// in case of empty we will get false 
isLoggedIn = ""
boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// in case there is somthing we get true 
isLoggedIn = "hello"
boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)



