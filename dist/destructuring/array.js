"use strict";

var _console;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// array destructuring
var a = 1,
    b = 2,
    c = 3,
    d = 4,
    rest = [5, 6, 7, 8, 9, 10];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

(_console = console).log.apply(_console, _toConsumableArray(rest));

console.log('/////////////////////////////////'); // variable assignments

var x, y, z;
x = 10;
y = 20;
z = 30;
console.log(x);
console.log(y);
console.log(z);
console.log('/////////////////////////////////'); // default values

var _ref = [101],
    _ref$ = _ref[0],
    m = _ref$ === void 0 ? 99 : _ref$,
    _ref$2 = _ref[1],
    n = _ref$2 === void 0 ? 100 : _ref$2;
console.log(m);
console.log(n);
console.log('/////////////////////////////////'); // swapping values

var r = 4;
var s = 6;
var _ref2 = [s, r];
r = _ref2[0];
s = _ref2[1];
console.log(r); // 6

console.log(s); // 4

console.log('/////////////////////////////////'); // parse a function return values

var getArrayResults = function getArrayResults() {
  return [0, 1, 2, 3];
};

var _getArrayResults = getArrayResults(),
    _getArrayResults2 = _toArray(_getArrayResults),
    g = _getArrayResults2[0],
    h = _getArrayResults2[1],
    rest1 = _getArrayResults2.slice(2);

console.log(g);
console.log(h);
console.log(rest1);
console.log('/////////////////////////////////'); //ignoring some values

var _ref3 = [3, 4, 5, 6, 7, 8],
    ax = _ref3[0],
    by = _ref3[1],
    za = _ref3[3];
console.log(ax);
console.log(by);
console.log(za);
console.log('/////////////////////////////////');