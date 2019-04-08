"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MINS_PER_HOUR = exports.SECS_PER_MINUTE = exports.HOURS_PER_DAY = exports.PI = exports.multiply = exports.division = exports.subtract = exports.add = exports.Calendar = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// some math functions
var add = function add(a, b) {
  return a + b;
};

exports.add = add;

var subtract = function subtract(a, b) {
  return a - b;
};

exports.subtract = subtract;

var division = function division(a, b) {
  return a / b;
};

exports.division = division;

var multiply = function multiply(a, b) {
  return a * b;
}; // some default constants


exports.multiply = multiply;
var PI = Math.PI;
exports.PI = PI;
var HOURS_PER_DAY = 24;
exports.HOURS_PER_DAY = HOURS_PER_DAY;
var SECS_PER_MINUTE = 60;
exports.SECS_PER_MINUTE = SECS_PER_MINUTE;
var MINS_PER_HOUR = 60;
exports.MINS_PER_HOUR = MINS_PER_HOUR;

var Calendar =
/*#__PURE__*/
function () {
  function Calendar() {
    _classCallCheck(this, Calendar);

    this.MONTHS_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.DAY_LIST = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  }

  _createClass(Calendar, [{
    key: "getCurrentDate",
    value: function getCurrentDate() {
      return new Date().getDate();
    }
  }, {
    key: "getCurrentDay",
    value: function getCurrentDay() {
      var day = new Date().getDay();
      return this.DAY_LIST[day];
    }
  }, {
    key: "getCurrentMonth",
    value: function getCurrentMonth() {
      var month = new Date().getMonth();
      return this.MONTHS_LIST[month];
    }
  }]);

  return Calendar;
}(); // exporting all


exports.Calendar = Calendar;
// export default
// per module there will be only one module acceptable
var _default = Calendar;
exports["default"] = _default;