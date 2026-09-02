const coding = ["Java","JavaScript","Python","Cpp","C","Rust","GoLang"];

coding.forEach((lang)=>{
    console.log(`Hello i am learning : ${lang}`)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})



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
    power: "Godly Strength",
    team: "Avengers",
    age: 1500,
    isAlive: true
  },
  {
    id: 4,
    name: "Hulk",
    realName: "Bruce Banner",
    power: "Super Strength",
    team: "Avengers",
    age: 49,
    isAlive: true
  },
  {
    id: 5,
    name: "Spider-Man",
    realName: "Peter Parker",
    power: "Spider Powers",
    team: "Avengers",
    age: 25,
    isAlive: true
  },
  {
    id: 6,
    name: "Batman",
    realName: "Bruce Wayne",
    power: "Intelligence",
    team: "Justice League",
    age: 40,
    isAlive: true
  },
  {
    id: 7,
    name: "Superman",
    realName: "Clark Kent",
    power: "Kryptonian Powers",
    team: "Justice League",
    age: 35,
    isAlive: true
  },
  {
    id: 8,
    name: "Wonder Woman",
    realName: "Diana Prince",
    power: "Super Strength",
    team: "Justice League",
    age: 5000,
    isAlive: true
  },
  {
    id: 9,
    name: "Flash",
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
    power: "Underwater Abilities",
    team: "Justice League",
    age: 35,
    isAlive: true
  }
];


superheroes.forEach((item)=>{
    console.log(`${item.name} => ${item.realName}`)
})

//note : for each loop doesnt return anything it just iterates over the array and executes the callback function for each element
//in the array.