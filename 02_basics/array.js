let myArr = [1 , 2 , 3 , 4 , 5]
console.log(myArr);
 // stack memory
myArr.push(6);
console.log(myArr)
// removes last element from the array
myArr.pop()
console.log(myArr);


// enters the value at 0 index of array 
myArr.unshift(8)
console.log(myArr);
// reoves first value from the 0 th index of array
myArr.shift()
console.log(myArr);

myArr.includes(9)
// gives true or false value after searching the value 


// slice used for subarray and does not affect original array
// splice used for subarray also takes range and removes subarray from original array

console.log("A" , myArr)


let Arr1 = myArr.slice(1,2)
console.log("B" , myArr);
console.log(Arr1);

let Arr2 = myArr.splice(1,2)
console.log("C", myArr)
console.log(Arr2)