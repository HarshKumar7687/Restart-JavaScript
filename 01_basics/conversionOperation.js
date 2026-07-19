let num = 173;
let stringNum = "173"; // "173harsh" => NaN

let str = String(num);
let num2 = Number(stringNum);

let isboolean = "false"; //undefined, null, 0, -0, NaN, "" => false
let booleanValue = Boolean(isboolean);

console.log(str);
console.log(typeof str);
console.log(num2);
console.log(typeof num2);
console.log(booleanValue);
console.log(typeof booleanValue);
