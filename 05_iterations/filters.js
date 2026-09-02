//08:24:00

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter method returns a new array with all the elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log(oddNumbers); // [1, 3, 5, 7, 9]


//same code using for each loop
const evenNumbersForEach = [];
numbers.forEach((number) => {
    if (number % 2 === 0) {
        evenNumbersForEach.push(number);
    }
});
console.log(evenNumbersForEach); // [2, 4, 6, 8, 10]