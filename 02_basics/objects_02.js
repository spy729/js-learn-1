// let user = new Object()
const user = {}
user.id = "12345"
user.name = "rishi"
user.isLoggedIn = false

console.log(user)

const regularuser = {
    username: {
        fullname :{
            firstname : "rishi",
            lastname : "agarwal"
        }
    }
}

console.log(regularuser.username.fullname.firstname);

const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 2 : "c" , 3 : "d"}
const obj3 = Object.assign({} , obj1 , obj2)
console.log(obj3)

const obj4 = {...obj1 , ...obj2}
console.log(obj3)

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

const course = {}

course.name = "js in hindi "
course.price = "999"
course.student = "rishi"

// course.student

const {student : name_of_student} = course

console.log(student );