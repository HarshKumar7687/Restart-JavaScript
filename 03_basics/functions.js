//function defination  :   here name is parameter
function greet(name="Alok"){
    return `Hello ${name}`;
}

//function reference   :   here "Harsh" is argument
console.log(greet("Harsh"));
console.log(greet());


function addSum(a,b){
    return a+b;
}

console.log(addSum(17,3))

//rest operator looks like spread operator
function totalCart(...num1){
    return num1;
}

console.log(totalCart(100,200,300)); //Output : [ 100, 200, 300 ]


let user = {
    username: "Harsh",
    age: 21
}

function handleObject(anyObject){
    return `The username is ${anyObject.username} and use age is ${anyObject.age}`
}

console.log(handleObject(user))


let arr = [17,3,5,10];
function getSecondElement(array){
    return array[1]
}

console.log(getSecondElement(arr))