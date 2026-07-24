console.log(5 > 3); // true
console.log("2"==2); // true    
console.log("02"==2); // true
console.log("02"===2); // false
console.log("02"!==2); // true
console.log(null==undefined); // true
console.log(null===undefined); // false


console.log(null==0); // false
console.log(null>0); // false
console.log(null>=0); // true

/*
symbols are unique and immutable data types that can be used as identifiers for object properties.
They are created using the Symbol() function. Each time you create a new symbol, it is guaranteed to be unique.
*/
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false