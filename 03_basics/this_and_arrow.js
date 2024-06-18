// this refers to current context

const user = {
    name: "rishi", 
    price: "999",

    welcomeMessage : function (){
        console.log(` ${this.name} , welcome to my page`)
    } 
}

console.log(user.welcomeMessage())

user.name = "sam"
console.log(user.welcomeMessage());

const chai = function(){
    let username = "rishi"
    console.log(this)
    console.log(this.username , "helol") ;
}

const code = () => {
    let username = "rishi"
    console.log(this)
    console.log(this.username , "helol") ;
}

chai()
code()
//  this is basic syntax of arrow function

const addTwo = (num1 , num2) => {
    return num1 + num2
}

// this is implicit return syantax of arrow function no need to write return 
const addThree = (num1 , num2 , num3) => num1 + num2 + num3
// we can also remove return if we use braces but if we use curly braces we have to use return type
const twoo = () => (console.log("hello"))
const threee = (num) => {return num}


console.log(addTwo(3,4))
console.log(addThree(3,4,5,));
console.log(threee(3))
twoo()