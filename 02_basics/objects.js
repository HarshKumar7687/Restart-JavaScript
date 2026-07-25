//singleton object created with Object.create() method 
const singleton = Object.create(null);
singleton.name = "Singleton Object";
console.log(singleton); // Output: { name: "Singleton Object" }


mySymbol = Symbol("mySymbol");

//object literal
const person = {
  name: "John",
  age: 30,
  [mySymbol]: "This is a symbol property",
  email: "john@example.com",
  isLoggedIn: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log(person); // Output: { name: "John", age: 30, email: "john@example.com", isLoggedIn: true }
console.log(person.name); // Output: John
console.log(person["name"]); // Output: John
person.age = 31; // Modifying property
console.log(person); // Output: { name: "John", age: 31, email: "john@example.com", isLoggedIn: true }
Object.freeze(person); // Freezing the object to prevent modifications
person.age = 32;
console.log(person); // Output: { name: "John", age: 31, email: "john@example.com", isLoggedIn: true }
console.log(person.greet()); // Output: Hello, my name is John
