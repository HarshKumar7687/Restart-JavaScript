//5:30:00
/*
this refers to the object that is executing the current function. In a regular function, this refers to the object that called
the function. In an arrow function, this refers to the object that defined the function.
*/

const person = {
    name: 'John',
    age: 30,

    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this); // Output: { name: 'John', age: 30, greet: [Function: greet] }
    }
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.

console.log("=================================",this); // Output: {} (in Node.js) or Window (in browser)


function regularFunction() {
    console.log(this); 
}

regularFunction();

function new