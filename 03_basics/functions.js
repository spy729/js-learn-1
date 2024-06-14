
function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log(" ");
    console.log("A");
    console.log("G");
}

sayMyName()


function addTwoNum(num1 , num2){
    console.log(num1 + num2);
}

addTwoNum(3,4)
addTwoNum(3 , "a")

function loginUserName(name){
    console.log(   ` hello there ${name} welcome to my codespace `)

}

loginUserName("rishi")

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(100 , 300 , 700));

const user ={ 
    name: "rishi",
    section : "cse-3"
}

function objectHandler(anyobject){
        console.log(`user name is ${anyobject.name} and section is ${anyobject.section}`)
}

objectHandler(user);
// similarly we can pass array in it