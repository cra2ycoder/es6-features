/**
 * @description
 * a normal function
 */
function defaultAdd(a, b) {
    return a + b
}

console.log(defaultAdd()) // NaN
console.log(defaultAdd(1)) // NaN
console.log(defaultAdd(0, 1)) // 1

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @description
 * a function with arguments
 */
function add(a = 0, b = 0) {
    return a + b
}

console.log(add()) // 0
console.log(add(1)) // 1
console.log(add(0, 1)) // 1
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * @param {arr} -> creates new array object every time when the call is triggered
 */

function defaultParamsWithArray(value, arr = []) {
    arr.push(value)
    return arr
}

console.log(defaultParamsWithArray(8)) // [8]
console.log(defaultParamsWithArray(9)) // [9]
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * @param {action} => defaultFn() will be called before it get assigned
 */

function defaultFn() {
    return 1
}

function defaultParamAsFunction(action = defaultFn()) {
    return action
}

console.log(defaultParamAsFunction()) // 1

// here, the function argument will be replaced with number
console.log(defaultParamAsFunction(9)) // 9

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @description
 * de-structured object param
 */

function deStructuredFunction([x, y] = [1, 2], { z: z } = { z: 4 }) {
    return x + y + z
}

console.log(deStructuredFunction()) // 7
console.log('/////////////////////////////////')
///////////////////////////////////////////
