// for of loop : it can be used for arrays or maps but not for objects
const array = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
for(const hero of array) {
    console.log(`Hero : ${hero}`);
}

const greet = "Hello World";
for(const char of greet) {
    console.log(`Character : ${char}`);
}


//for in loop : it can be used for both object and array and in arrays index becomes key but not on maps
const object = {
    java: "Java",
    cpp: "C++",
    py: "Python"
}

for (const key in object) {
   console.log(`${key} -> ${object[key]}`)
}

for(const key in array){
    console.log(`index ${key} : ${array[key]}`);
}
