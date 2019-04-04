// some math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const division = (a, b) => a / b;
const multiply = (a, b) => a * b;

// some default constants
const PI = Math.PI;
const HOURS_PER_DAY = 24;
const SECS_PER_MINUTE = 60;
const MINS_PER_HOUR = 60;

class Calendar {
  constructor() {
    this.MONTHS_LIST = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.DAY_LIST = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
  }

  getCurrentDate() {
    return new Date().getDate();
  }

  getCurrentDay() {
    const day = new Date().getDay();
    return this.DAY_LIST[day];
  }

  getCurrentMonth() {
    const month = new Date().getMonth();
    return this.MONTHS_LIST[month];
  }
}

// exporting all
export {
  Calendar,
  add,
  subtract,
  division,
  multiply,
  PI,
  HOURS_PER_DAY,
  SECS_PER_MINUTE,
  MINS_PER_HOUR
};

// export default
// per module there will be only one module acceptable
export default Calendar;
