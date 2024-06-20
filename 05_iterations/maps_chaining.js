const nums = [ 1 ,2, 3, 4 ,5 ,6,7,8,9,10]

// map is used for changing the value of items and filter is used for 
// const newNums = nums.map(
//     (item) => item + 10
// )
// console.log(newNums)

// chaining is used for using more than one method at a time it passes the valus from first iterated values to another 


const newNums = nums.map( (num) => (num * 10))
                    .map( (num) => (num + 1))
                    .filter( (num) => (num >= 30))

console.log(newNums)