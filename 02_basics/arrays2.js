const marvel_heroes = ["Spiderman","Iron Man", "Captain America", "Thor", "Hulk"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
const indian_heroes = ["Shaktimaan", "Krrish", "G.One", "Bhavesh Joshi"];

const heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

// Using the spread operator
const all_heroes = [...marvel_heroes, ...dc_heroes, ...indian_heroes];
console.log(all_heroes);

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); 

//flattening an array
const array = [1, 2, [3, 4], [5, 6,[7,[8,9]]]];
const flattenedArray = array.flat(Infinity); // Using Infinity to flatten all levels of nested arrays
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray(marvel_heroes)); // Output: true
console.log(Array.isArray("Hello")); // Output: false
console.log(Array.from("Hello")); // Output: ["H", "e", "l", "l", "o"]

let score1 = 97;
let score2 = 85;
let score3 = 92;
console.log(Array.of(score1, score2, score3)); // Output: [97, 85, 92]