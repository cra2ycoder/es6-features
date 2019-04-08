// TYPE1: importing default and individual functions
import Calendar, { add, subtract, division, PI } from './Math'

const calender = new Calendar()
console.log(calender.getCurrentDate())
console.log(calender.getCurrentDay())
console.log(calender.getCurrentMonth())
console.log(PI)

console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(division(1, 2))

// --------------------------------------------

// TYPE 2: importing all
import * as MathLib from './Math'

console.log(new MathLib.Calendar().getCurrentDate())

console.log(MathLib.add(1, 2))
console.log(MathLib.subtract(1, 2))
console.log(MathLib.division(1, 2))

// --------------------------------------------
// TYPE 3: importing with alias
import { Calendar as MyCalendar } from './Math'

// console.log(Calendar); // error: Calendar is not defined
console.log(MyCalendar) // results: [Function: Calendar]

// printing a modules
console.log(module)
console.log(module.children[0].exports)

// --------------------------------------------
// TYPE 4: importing only default
import Calendar from './Math'

const caln = new Calendar()
console.log(caln.DAY_LIST)
