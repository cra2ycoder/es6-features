/**
 * @note
 * if resolve() -> succeeded first then reject() will not be triggered
 * if reject() -> succeeded first then resolve() will not be triggered
 */

const promise = new Promise((resolve, reject) => {
    // console.log(resolve)
    // console.log(reject)
    // reject('rejected!')
    // resolve('Good to go!')

    setTimeout(() => {
        resolve('good to go!')
    }, 1000)

    setTimeout(() => {
        reject('rejected!')
    }, 1200)
})

promise
    .then(
        res => {
            console.log(res)
        }
        // err => {
        //     console.log(err)
        // }
    )
    .catch(err => {
        console.log(err)
    })

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 *
 * @note
 * Promise.all
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1')
    }, 100)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2')
    }, 200)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise3')
    }, 1200)
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise4')
    }, 800)
})

/**
 * @note
 * 1. if we are using multiple promises then, we will get callback only after all calls completed
 * 2. if any one promise gets failed then remaining promises will be skipped and it will trigger the reject()
 * 3. return object type is Array
 */
var previousTime = new Date().getTime()

/**
 * @note
 * Promise.all
 */
// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values)
//         console.log(typeof values)
//         console.log(values[0])

//         var currentTime = new Date().getTime()
//         console.log(currentTime - previousTime)
//     })
//     .catch(err => {
//         console.log('error msg from Promise.all')
//         console.log(`Promise.all ${err}`)
//     })

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * Promise.race
 * 1. which resolves or rejects as first time / very early in the promise list that will be triggered
 * remaining promises will be skipped
 *
 */

Promise.race([promise1, promise2, promise3, promise4])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(`Promise.race error: ${err}`)
        console.log(err)
    })

console.log('/////////////////////////////////')
///////////////////////////////////////////
