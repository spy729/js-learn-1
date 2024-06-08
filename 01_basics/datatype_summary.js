// primitive data types => number ,  string ,  boolean , null , undifined , symbol , bigInt 

// Refrence (non - premitive data type )
// array , object , functions 

//  stack is primitive and heap is non primitive 
// in stack when the data is changed it is done in its copy but in heap it is done by refrence 

let name1 = "rishi agarwal"
let name2 = name1;
name2 = "changed name"
console.log(name1);
console.log(name2)

let student1 = {
    name: "rishi",
    roll_no : 144
}

let student2 = student1;
student2.name = "changed name"
console.log(student1.name);
console.log(student2.name)