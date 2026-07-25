const date = new Date();
console.log(date); // Outputs the current date and time
console.log(date.toString()); // Outputs the date in a human-readable format
console.log(date.toDateString()); // Outputs the date in a more concise format
console.log(date.toTimeString()); // Outputs the time portion of the date
console.log(date.toLocaleString()); // Outputs the date and time in a locale-specific format
console.log(typeof date); // Outputs "object"

let specificDate = new Date(2004,4,17); // Month is 0-indexed, so 4 represents May
console.log(specificDate.toDateString()); // Outputs "Mon May 17 2004"

let specificDateTime = new Date(2004,4,17,2,12,0); // May 17, 2004 at 2:12:00 AM
console.log(specificDateTime.toLocaleString()); // Outputs "5/17/2004, 2:12:00 AM" (format may vary based on locale)

let createdDate = new Date("5-17-2004"); 
console.log(createdDate.toLocaleString()); // Outputs "5/17/2004, 2:12:00 AM" (format may vary based on locale)

let myTimeStamp = Date.now(); // Gets the current timestamp in milliseconds since January 1, 1970
console.log(myTimeStamp); // Outputs the current timestamp
console.log(createdDate.getTime()); // Outputs the timestamp for the specific date

console.log(myTimeStamp - createdDate.getTime()); // Outputs the difference in milliseconds between the two timestamps

console.log(Math.floor(myTimeStamp/1000)); // Outputs the current timestamp in seconds since January 1, 1970


let myDate = new Date();
console.log(myDate.getFullYear());
console.log(myDate.getMonth()); // Month is 0-indexed, so January is 0
console.log(myDate.getDate());
console.log(myDate.getDay()); // Day is 0-indexed, so Sunday is 0