/**
 * @description
 * used to iterate the array, object
 */

/**
 * @note
 * simple array
 */
const numArr = [0, 1, 2, 3]

const iterateSimpleArr = () => {
    for (let num of numArr) {
        console.log(num)
    }
}

iterateSimpleArr()
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * simple string
 */
const strings = 'for-of'

const iterateSimpleStr = () => {
    for (let str of strings) {
        console.log(str)
    }
}

iterateSimpleStr()
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * using with two dimensional array
 */
const twoDimensionArr = [[0, 1], [2, 3], [4, 5]]

const iterateSimpleTwoDimensionalArray = () => {
    for (let [x, y] of twoDimensionArr) {
        console.log(`${x} ${y}`)
    }
}

iterateSimpleTwoDimensionalArray()
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * for ... of vs for ... in
 */

const obj = {
    name: 'es6',
    feature: 'for-of vs for-in',
    version: 6
}

const arr = [0, 1, 2]

// works
for (let i of arr) {
    console.log(i) // 0 -> 1 -> 2
}

// throws error
// for (let { p, v } of obj) {
//     console.log(`${p}:${v}`)
// }

// throws error
// for (let [p, v] of obj) {
//     console.log(`${p}:${v}`)
// }

// throws error
// for (let prop of obj) {
//     console.log(`${prop}:${obj[prop]}`)
// }

console.log('/////////////////////////////////')
///////////////////////////////////////////

// works
for (let i in arr) {
    console.log(i)
}

// works
for (let i in obj) {
    console.log(i) // name -> feature -> version
}

// works as expected
for (let i in obj) {
    console.log(`${i} ${obj[i]}`)
}

// works but not as expected

/**
 * result: n a -> f e -> v e
 * here [p,v] => applies array destructuring
 * means prop name consider as array
 */
for (let [p, v] in obj) {
    console.log(`${p} ${v}`) //
}

// works but not as expected
/**
 * here, {p, v} => applies object destructuring, p and v are not acutal prop name of the object
 * show it will print undefined
 * result: undefined undefined -> undefined undefined -> undefined undefined
 */
for (let { p, v } in obj) {
    console.log(`${p} ${v}`)
}
