let name = "rishi" 
let branch = "cse "
// it is a object so memory is heap 

console.log(name)

// this is another syntax for using variables in log outputs which is using `` and ${} 

console.log(`I am ${name} and my branch is ${branch} `);

console.log(name.length)
console.log(name.charAt(2));
console.log(name.toUpperCase());
// we have to give stirng in argument 
console.log(name.indexOf('r'))

// for substring we have two methods for substrings of string substring(simple substring using two indices) and slice(it can take negative values and starts from backwords when negative are given) 
name = "agarwal rishi"
console.log(name.substring(0,4))
console.log(name.slice(-8,12))

// now methods for sanitization of string 

let newstring = "    rishi    "
// for removing extra spaces from start and end we use trim method
console.log(newstring)
console.log(newstring.trim())

// for replacing any char or stirng with another string we use replace 

let url = "https://rishi.com/rishi%20agarwal"

console.log(url)
console.log(url.replace('%20','-'));


console.log(url.includes('agarwal'))