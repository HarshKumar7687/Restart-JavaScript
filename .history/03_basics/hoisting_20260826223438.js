/*
Hoisting is JavaScript's behavior of processing declarations before executing the code, allowing function declarations and var
variables to be referenced before their declaration, with important differences for let, const, and function expressions.
*/


console.log(addOne(5)); // Output: 6
function addOne(num){
    return num + 1;
}
addOne(5);


console.log(num);
num = 10;
console.log(num);


console.log(addTwo(5)); // Output: TypeError: addTwo is not a function
const addTwo = function(num){
    return num + 2;
}
addTwo(5);
