let myArray = [1, 2, 3, 4, 5];

// Accessing elements
console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3

// Modifying elements
myArray[1] = 20;
console.log(myArray); // Output: [1, 20, 3, 4, 5]

// Adding elements at end
myArray.push(6);
console.log(myArray); // Output: [1, 20, 3, 4, 5, 6]

// Adding elements at beginning
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 20, 3, 4, 5, 6]

// Removing last elements
myArray.pop();
console.log(myArray); // Output: [1, 20, 3, 4, 5]

// Removing first elements
myArray.shift();
console.log(myArray); // Output: [1,20, 3, 4, 5]

// Array length
console.log(myArray.length); // Output: 5

// Finding if an element exists in the array
console.log(myArray.includes(9)); // Output: false

// Finding the index of an element
console.log(myArray.indexOf(3)); // Output: 2

const newArray = myArray.join()
console.log(newArray); // Output: "1,20,3,4,5"
console.log(typeof newArray); // Output: string


//slice and splice
//slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
//where start and end represent the index of items in that array. The original array will not be modified.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Orange", "Lemon"]
console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Apple", "Mango"]

//splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ["Jan", "March", "April", "June"];
const removed = months.splice(1, 2);
console.log(months); // Output: ["Jan", "June"]
console.log(removed); // Output: ["March", "April"]

/*
shallow copy vs deep copy
Shallow copy is a copy of the array that shares references to the same objects in memory.
If you modify an object in the shallow copy, it will also affect the original array.

A deep copy creates a new array with new objects, so changes to the deep copy do not affect the original array.

Arrays in js use shallow copy by default.
*/

const heroes = new Array("Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Captain America", "Doctor Strange");
console.log(heroes); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", "Black Panther", "Captain America", "Doctor Strange"]
