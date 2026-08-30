//if
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

//if else
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//if else if else
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

//nested if
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Entry not allowed");
}

//comparison operators
let a = 10;
let b = 20;

console.log(a > b);      // false
console.log(a < b);      // true
console.log(a >= b);     // false
console.log(a <= b);     // true
console.log(a == b);     // false
console.log(a != b);     // true
console.log(a === b);    // false
console.log(a !== b);    // true

//and logical operators
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}

//