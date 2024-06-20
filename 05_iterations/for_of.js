// for of loop

let arr = ["1" , "2" , "3" , "4" , "5"]

for(const num of arr){
    console.log(num)
}

const greet = "hello world"
for(const val of greet){
    console.log(`the character is ${val}`)
}

// maps

const map = new Map()
map.set('IN' , 'India')
map.set('USA', 'United States Of India')
map.set('PAK', 'Pakistan')

console.log(map)
// it is used for maps not for objects
for(const [key , value] of map ){
    console.log(key)
    console.log(value)
}