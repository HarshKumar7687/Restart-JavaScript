let array = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];

for(let i = 0; i < array.length; i++) { 
    console.log("User : ",array[i]);
}

//nested for loop
for(let i = 0; i < 10; i++) {
    console.log(`outer loop : ${i}`);
    for(let j = 0; j < 5; j++) {
        console.log(`inner loop : ${i}, ${j}`);
    }
}

//break statement
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("detected 5, breaking the loop");
        break;
    }
    console.log(`break loop : ${i}`);
}


//continue statement
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("detected 5, skipping the iteration");
        continue;
    }
    console.log(`continue loop : ${i}`);
}
