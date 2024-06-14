const sym = Symbol("key1")

const student = {
    [sym]: "value1",
    name: "rishi",
    branch: "cse", 
    email: "rishi@gmail.com",
    isLoggedIn: false, 
    lastLogginDays: [ "Monday" , "Tuesday"]
}

console.log(student)
// it is onw way to access key value 
console.log(student.email)
// another way and more efficient is this one as we can access symbols in it 
console.log(student["email"])
console.log(typeof student[sym])

// freeze method it is used for making object uneditable
student.email = "rishi729@gmail.com"
Object.freeze(student)
student.email = "alpha33@gmail.com"
console.log(student["email"])

student.allowance = function(){
    console.log("hello you are welcome");
}
console.log(student.allowance);

student.welcome = function() {
    console.log(`hello everyone he is ${this.name} lets welcome to our society`)
}
console.log("student[welcome]);