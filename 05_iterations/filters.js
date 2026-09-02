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


const superheroes = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    power: "Technology",
    team: "Avengers",
    age: 48,
    isAlive: false
  },
  {
    id: 2,
    name: "Captain America",
    realName: "Steve Rogers",
    power: "Super Strength",
    team: "Avengers",
    age: 106,
    isAlive: true
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    power: "Lightning",
    team: "Avengers",
    age: 1500,
    isAlive: true
  },
  {
    id: 4,
    name: "Spider-Man",
    realName: "Peter Parker",
    power: "Spider Abilities",
    team: "Avengers",
    age: 28,
    isAlive: true
  },
  {
    id: 5,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    power: "Espionage",
    team: "Avengers",
    age: 39,
    isAlive: false
  },
  {
    id: 6,
    name: "Superman",
    realName: "Clark Kent",
    power: "Super Strength",
    team: "Justice League",
    age: 35,
    isAlive: true
  },
  {
    id: 7,
    name: "Batman",
    realName: "Bruce Wayne",
    power: "Intelligence",
    team: "Justice League",
    age: 40,
    isAlive: true
  },
  {
    id: 8,
    name: "Wonder Woman",
    realName: "Diana Prince",
    power: "Super Strength",
    team: "Justice League",
    age: 800,
    isAlive: true
  },
  {
    id: 9,
    name: "The Flash",
    realName: "Barry Allen",
    power: "Super Speed",
    team: "Justice League",
    age: 30,
    isAlive: true
  },
  {
    id: 10,
    name: "Aquaman",
    realName: "Arthur Curry",
    power: "Underwater Strength",
    team: "Justice League",
    age: 35,
    isAlive: true
  }
];

const aliveSuperheroes = superheroes.filter((hero) => hero.isAlive);
console.log(aliveSuperheroes); // returns an array of superheroes that are alive

const marvelSuperheroes = superheroes.filter((hero)=>{
    return hero.team === "Avengers";
});
console.log(marvelSuperheroes); // returns an array of superheroes that are in the Avengers team

const marvelDeadSuperheroes = superheroes.filter((hero)=> {
    return hero.team === "Avengers" && hero.isAlive === false;
});
console.log(marvelDeadSuperheroes); // returns an array of superheroes that are in the Avengers team and are dead