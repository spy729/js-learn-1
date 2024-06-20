const coding = [ 'js' , 'python' , 'c++' ,'php']

coding.forEach( function ( item ) {
    console.log(item)
})

// we have to use call back function here it does not have name since it is not required to store

coding.forEach( ( item , index , arr) => ( console.log(`this is element in array ${item} with index ${index} and array is ${arr}`)))

const myArr = [
    {
        language: "java script", 
        languageFileNmae : "js"
    },
    {
        language: "python", 
        languageFileNmae : "py"
    },
    {
        language: "java", 
        languageFileNmae : "java"
    },
]

myArr.forEach( (item) => {
    console.log(item.language)
})