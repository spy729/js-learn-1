let marvel = ["ironman" , "thor" , "thanos"]
let dc = ["batman" , "superman" , "flash"]
// marvel.push(dc)
// it will create another array in marvel array
// console.log(marvel)
//this will make new array where bith are joined if we will not make new array then 
let hero = marvel.concat(dc)
console.log(hero)

// new operator known as spread operator  that is ... it makes every element individual

let new_array = [ ...marvel , ...dc]
console.log(new_array)


// flat method

let another_array = [1 ,2 ,3 ,4 , [5 ,6 ] , 7 , [6 , 7, [8,9]]]
let real_usable_array = another_array.flat(Infinity)
console.log(real_usable_array)

// it gives the true or false whether it is array or not
console.log(Array.isArray("hitesh"))

// from method is used to create array from any input
console.log(Array.from("hitesh"))
console.log(Array.from({name: "rishi"})) // interesting it gives empty array good ques..

let a = 1 
let b = 2 
let c = 3 
// of method is used to create array from diff. elements 
console.log(Array.of(a , b , c))

