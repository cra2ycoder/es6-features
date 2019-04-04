import Calendar, { add, subtract, division } from "./Math";

const calender = new Calendar();
console.log(calender.getCurrentDate());
console.log(calender.getCurrentDay());
console.log(calender.getCurrentMonth());

// --------------------------------------------

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(division(1, 2));
