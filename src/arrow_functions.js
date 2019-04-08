/**
 * @description
 * - also known as FAT arrow functions
 * - super handy
 * - most popular features in ES6
 * - its a short hand way to write a function
 * - we can skip function and return keyword
 * - change the way of this which binds in the functions
 */

// normal function
function normalFunction() {
    //   console.log(this); // returns node object
    return 20
}

// arrow function
const getNumber = () => {
    //   console.log(this); // returns {}
    return 10
}

console.log(getNumber())
console.log(normalFunction())

// arrow function with single param
const singleParamArrowFunction = a => a

console.log(singleParamArrowFunction('test'))

// arrow function with multiple params
const multipleParamsWithArrowFunction = (a, b, c) => a + b + c

console.log(multipleParamsWithArrowFunction(1, 2, 3)) // 6

// when required to add more statements with the arrow function
const withMultipleStatements = () => {
    var a = 1
    var b = 2
    var c = 3
    return a + b + c
}

console.log(withMultipleStatements()) // 6

// most usage of on the arrow functions
// map, filter and reduce...etc.,
const numbers = [1, 2, 3, 1, 5, 6, 7, 1, 10]
const filteredNum = numbers.filter(val => val === 1)

console.log(filteredNum) // [1, 1, 1]
