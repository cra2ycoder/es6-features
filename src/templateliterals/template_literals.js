/**
 * @default
 *
 */

const defaultTL = `template literal example`
console.log(defaultTL)

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * with expression
 */

const checkLiteral = `\`` === '`'
console.log(checkLiteral)

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * multiline strings
 */

const multiLines = `Template
literal
testing
for 
multi lines`

console.log(multiLines)
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * expressions inside
 */

const x = 10
const y = 20

const expTLResult = `add: ${x + y}, multiply: ${x * y}, division: ${x / y}`

console.log(expTLResult) // add: 30, multiply: 200, division: 0.5
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * nesting templates with ternary/conditional operator
 */

const a = 10
const b = 20
const c = 30

const res = `result: ${
    a > b ? 'a is large' : b > c ? 'b is large' : 'c is large'
}`

console.log(res)
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * tagged templates
 */

const myTag = (strings, nameExp, msgExp) => {
    console.log(strings) // [ 'Hi ', ', ', '!' ]
    console.log(nameExp) // john
    console.log(msgExp) // welcome
    console.log(strings.raw[0]) // Hi
}

const name = 'john'
const msg = 'welcome'

myTag`Hi ${name}, ${msg}!`
console.log('/////////////////////////////////')
///////////////////////////////////////////
