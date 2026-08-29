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
    }
};