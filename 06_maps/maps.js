//Maps are a collection of key value pairs. A Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value. keys are unique

const map = new Map();
map.set("IN","India");
map.set("USA","United States Of America");
map.set("FR","France");
map.set("IN","India");
console.log(map);

for(const [key,value] of map){
    console.log(key, ":" , value)
}

console.log(typeof map)