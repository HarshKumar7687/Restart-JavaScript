const numbers = [1, 2, 3, 4, 5]

let initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
},initialValue);

console.log(sum) // 15

//accumalator is the value that is returned from the previous iteration of the callback function.
//The first time the callback function is called, the accumulator is equal to the initial value that we passed as the second argument
//to reduce.

//The current value is the first element in the array. The return value of the callback function is assigned to the accumulator for
//the next iteration. This process continues until all elements in the array have been processed, and the final value of the 
//accumulator is returned as the result of reduce.

const shoppingCart = [
    { item: "Apple", price: 150 },
    { item: "Banana", price: 50 },
    { item: "Orange", price: 75 },
    { item: "Grapes", price: 200 }
];

const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 10);

console.log(total); // 500