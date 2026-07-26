//de-structuring objects

const course = {
    courseName : "CSE",
    students : "3000",
    fees : "2 lakhs",
    collage : "SOA"
};

const {collage} = course;
console.log(collage)

const {courseName: name} = course;
console.log(name)


//for studying api (json format) better and understanding data inside api we have json formatter : https://jsonformatter.org/