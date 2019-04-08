/**
 * @description
 * rest operator == spread operator
 * (...)
 *
 */

/**
 * a simple function
 * @param  {...any} numbers
 */
const add = (...numbers) => {
    let res = 0
    for (let num of numbers) {
        res += num
    }
    return res
}

///////////////////////////////////////////

// simple function call
const addResult = add(1, 2, 3, 4, 5)
console.log(addResult) // 15

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * passing as array value with spread
 *
 * this simply nothing but to replace Function.prototype.apply
 * app.apply(null, arrNumbers) === app(...arrNumbers)
 */
const arrNumbers = [1, 2, 3, 4, 5]
const addResultWithSpread = add(...arrNumbers)
const withFnApply = add.apply(null, arrNumbers)

console.log(withFnApply) // 15
console.log(addResultWithSpread) // 15

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * passing a group of functions
 */
const aGroupNumbers = [1, 2, 3, 4, 5]
const bGroupNumbers = [6, 7, 8, 9, 10]

const concatGroups = [...aGroupNumbers, ...bGroupNumbers]
const groupResults = add(...concatGroups)
console.log('groupResults: ', groupResults)
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * rest param at the last of function argument
 * @note rest param always should be last of the param
 *
 * @param {*} x
 * @param {*} y
 * @param  {...any} z
 */
const listFunctionParams = (x, y, ...z) => {
    console.log(x) // 1
    console.log(y) // 3
    console.log(z) // [1, 2, 3, 4, 5]
}

listFunctionParams(1, 3, 1, 2, 3, 4, 5)

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * now concat an array is so easy
 */
const fruits = ['apple', 'orange', 'pineapple']
const vegetables = ['tomato', 'potato']

const market = [...fruits, ...vegetables]

console.log(market) // [ 'apple', 'orange', 'pineapple', 'tomato', 'potato' ]
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * function arguments by referring with `arguments`
 */

function noArgsFunctionWithArgs() {
    console.log(arguments) // { '0': 'es6', '1': 'javascript', '2': 'babel', '3': 2015 }
    console.log(...arguments) // es6 javascript babel 2015
    let args = [...arguments]
    console.log(args) // [ 'es6', 'javascript', 'babel', 2015 ]
}

noArgsFunctionWithArgs('es6', 'javascript', 'babel', 2015)

/**
 * @note
 * copy an array
 */
var arr = [1, 2, 3]
var arr2 = [...arr]

console.log(arr) // [ 1, 2, 3 ]
console.log(arr2) // [ 1, 2, 3 ]
console.log(arr.push(4)) // 4
console.log(arr) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3 ]

console.log('/////////////////////////////////')
///////////////////////////////////////////
