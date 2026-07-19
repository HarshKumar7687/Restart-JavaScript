let name = "Harsh";
let age = 20;
let place = null;
let isStudent = true;
let id;
let salary = 1000000000000000000000n;


console.table([typeof name, typeof age, typeof place, typeof isStudent, typeof id,typeof salary])
console.table([
  {
    Variable: "name",
    Value: name,
    Type: typeof name,
  },
  {
    Variable: "age",
    Value: age,
    Type: typeof age,
  },
  {
    Variable: "place",
    Value: place,
    Type: typeof place,
  },
  {
    Variable: "isStudent",
    Value: isStudent,
    Type: typeof isStudent,
  },
  {
    Variable: "id",
    Value: id,
    Type: typeof id,
  },
  {
    Variable: "salary",
    Value: salary.toString() + "n",
    Type: typeof salary,
  },
]);