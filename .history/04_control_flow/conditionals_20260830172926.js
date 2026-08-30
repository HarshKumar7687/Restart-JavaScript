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

//or logical operators
let isWeekend = true;

if (isWeekend || age >= 18) {
    console.log("You can go to the park");
}


//logical NOT operator
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}

//ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(`Discount: ${discount * 100}%`);

//nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(`Grade: ${grade}`);

//