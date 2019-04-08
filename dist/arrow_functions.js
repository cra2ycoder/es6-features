"use strict";

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
  return 20;
} // arrow function


var getNumber = function getNumber() {
  //   console.log(this); // returns {}
  return 10;
};

console.log(getNumber());
console.log(normalFunction()); // arrow function with single param

var singleParamArrowFunction = function singleParamArrowFunction(a) {
  return a;
};

console.log(singleParamArrowFunction('test')); // arrow function with multiple params

var multipleParamsWithArrowFunction = function multipleParamsWithArrowFunction(a, b, c) {
  return a + b + c;
};

console.log(multipleParamsWithArrowFunction(1, 2, 3)); // 6
// when required to add more statements with the arrow function

var withMultipleStatements = function withMultipleStatements() {
  var a = 1;
  var b = 2;
  var c = 3;
  return a + b + c;
};

console.log(withMultipleStatements()); // 6
// most usage of on the arrow functions
// map, filter and reduce...etc.,

var numbers = [1, 2, 3, 1, 5, 6, 7, 1, 10];
var filteredNum = numbers.filter(function (val) {
  return val === 1;
});
console.log(filteredNum); // [1, 1, 1]