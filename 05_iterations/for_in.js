const myObject = { 
    js: "java script",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
}
// it is used for objects not for maps

for(const key in myObject){
    console.log(myObject[key])
}