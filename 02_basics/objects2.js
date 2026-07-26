const user = new Object();
user.name = "Harsh";
user.age = 21;

const newUser = {
    email : "harsh@gmail.com",
    fullName : {
        firstName : "Harsh",
        lastName : "Kumar"
    },
    age : 22
}

console.log(Object.keys(user)); 
console.log(Object.values(user)); 
console.log(Object.entries(user)); 

console.log(user.hasOwnProperty('isLoggedIn'));
console.log(user.hasOwnProperty('age'));

console.log(user)
console.log(newUser)
console.log(newUser.fullName)


const obj1 = {name: "Harsh", age: 21};
const obj2 = {email: "harsh@gmail.com", marks: 91}
const obj3 = {obj1,obj2}
const obj4 = Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4)

const obj5 = {...obj1, ...obj2};
console.log(obj5);