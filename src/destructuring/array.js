// array destructuring
const [a, b, c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(...rest);
console.log("/////////////////////////////////");

// variable assignments
var x, y, z;
[x, y, z] = [10, 20, 30];

console.log(x);
console.log(y);
console.log(z);

console.log("/////////////////////////////////");

// default values
var [m = 99, n = 100] = [101];
console.log(m);
console.log(n);

console.log("/////////////////////////////////");

// swapping values
var r = 4;
var s = 6;
[r, s] = [s, r];

console.log(r); // 6
console.log(s); // 4

console.log("/////////////////////////////////");

// parse a function return values
const getArrayResults = () => [0, 1, 2, 3];
const [g, h, ...rest1] = getArrayResults();
console.log(g);
console.log(h);
console.log(rest1);

console.log("/////////////////////////////////");

//ignoring some values
const [ax, by, , za] = [3, 4, 5, 6, 7, 8];

console.log(ax);
console.log(by);
console.log(za);

console.log("/////////////////////////////////");
