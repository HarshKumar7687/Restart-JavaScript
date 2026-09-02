const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNumsDoubled = myNums.map((num) => num * 2)
console.log(myNumsDoubled) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const myNumsPlus10 = myNums.map((num) => {
    return num + 10;
})
console.log(myNumsPlus10) // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]