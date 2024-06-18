// we use iife (immediately invoked function expression) to remove global pollution in a function and it is immediately executed
// (function)(execution) this is the syntax for iife

(function chai(){
    console.log("hello to iife")
})();

( (name) => (console.log(`be to iife ${name}`)))
("hitesh")

