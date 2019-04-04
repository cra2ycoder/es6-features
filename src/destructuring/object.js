const data = {
  name: "es6",
  concept: "destructure",
  version: 6.0,
  language: "javascript",
  isJava: false
};

// basic assignment
// var { name, version } = data;

// console.log(name);
// console.log(version);

console.log("/////////////////////////////////");

// assigning to new variable names
var { name: newName, version: newVersion } = data;

console.log(newName);
console.log(newVersion);

// ^ here, name and version cant be used

console.log("/////////////////////////////////");

// default values
var { a = 1, b = 2 } = { a: 4 };

console.log(a);
console.log("/////////////////////////////////");

// new names with default values
const { x: newX = 6, y: newY = 7 } = { x: 9 };

console.log(newX);
console.log("/////////////////////////////////");

const people = {
  name: "Mike Smith",
  family: {
    mother: "Jane Smith",
    father: "Harry Smith",
    sister: "Samantha Smith"
  },
  age: 35
};

const {
  family: { mother, father, sister }
} = people;

console.log(mother);
console.log(father);
console.log(sister);
console.log("/////////////////////////////////");

// dynamic property name with destructuring

let customName = "dynamicPropName";
const { [customName]: refProp } = { dynamicPropName: 101000 };

console.log(refProp);

console.log("/////////////////////////////////");
