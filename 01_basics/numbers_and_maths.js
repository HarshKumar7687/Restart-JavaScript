const num = 17;
const num2 = new Number(3);

console.log(num);
console.log(num2);
console.log(num + num2); // 20
console.log(num.toString().length); // "17".length() = 2

console.log(num2.toFixed(2)); // "3.00"

let otherNum = 15.6969;
console.log(otherNum.toPrecision(3)); // "15.7"

const hundred = 10000000;
console.log(hundred.toLocaleString()); // "1,00,00,000"  //en-IN

//**************************  MATHS     *************************** //

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.7));   // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(8, 2)); // 64
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

const randomNum = Math.random(); // 0.0 to 1.0
console.log(randomNum);
console.log(Math.floor(randomNum * 10));

let min = 10;
let max = 20;
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum2); // 10 to 20