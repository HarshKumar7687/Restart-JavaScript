//IIFE = Immediately Invoked Function Expression

//it overcomes the problem of polluting the global scope by creating a new scope for variables and functions defined inside it.
//It is a function that runs as soon as it is defined.
(function() {
    console.log("This is an IIFE function");
})();

//IIFE with arrow function
(() => {
    console.log("This is an IIFE arrow function");
})();

//()() : first () is for function declaration and second () is for invoking the function
