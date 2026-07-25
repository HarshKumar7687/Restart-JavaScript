let name = "Harsh";
let result = 90;
console.log("My name is " + name + " and my result is " + result);
console.log(`My name is ${name} and my result is ${result}`);
console.log(typeof name);

let newName = new String("Alok");
console.log(typeof newName);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName[0]);
console.log(newName.indexOf("k"));

//in slice method we can use negative index but in substring method we can't use negative index
const crop = name.substring(0, 3);
const crop1 = name.slice(0, 3);
console.log(crop);
console.log(crop1);

const newString = "   Hello World   ";
console.log(newString);
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());
console.log(newString.bold());

let url = "https://www.kolabb%20netlify.com";
console.log(url.replace("%20", "-"));
console.log(url.includes("kolabb"));
console.log(url.includes("kollabb"));

let str = "Hello my name is Harsh";
let words = str.split(" ");
console.log(words);
console.log(str.split(" ", 3));