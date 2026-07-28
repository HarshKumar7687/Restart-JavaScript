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