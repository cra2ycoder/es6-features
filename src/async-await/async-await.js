/**
 * @note
 * 1. `await` cant be used without `async`
 */

function getListFromUser() {
    // const prevTimer = new Date().getTime()
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100)
            // console.log(promise)
        }, 1000)
    })

    // console.log(promise)
    // const curTimer = new Date().getTime()
    // console.log(prevTimer - curTimer)
    return promise
}

async function toDo() {
    console.log('job started')
    const res = await getListFromUser()
    console.log(res)
}

// toDo()

/**
 * @function
 *
 */
const fastPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fastPromiseFunction')
        }, 200)
    })
}

const slowPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('slowPromiseFunction')
        }, 500)
    })
}

/**
 * @example @function
 * for timer conversion
 */

const getTimer = (curTime, prevTime) => {
    const time = curTime - prevTime
    return time / 1000
}

/**
 * @example
 * SEQUENTIAL
 * - start one by one
 */

const sequentialFlow = async () => {
    let slowTimer = new Date().getTime()
    const slow = await slowPromiseFunction()

    console.log(slow) // slowPromiseFunction
    console.log(getTimer(new Date().getTime(), slowTimer))

    console.log('/////////////////////////////')

    let fastTimer = new Date().getTime()
    const fast = await fastPromiseFunction()

    console.log(fast) // fastPromiseFunction
    console.log(getTimer(new Date().getTime(), fastTimer))
}

// sequentialFlow()

/**
 * @example
 * CONCURRENT
 * - start at the same time
 */
const concurrentFlow = async () => {
    let slowTimer = new Date().getTime()
    const slow = slowPromiseFunction()

    let fastTimer = new Date().getTime()
    const fast = fastPromiseFunction()

    await slow
    console.log(getTimer(new Date().getTime(), slowTimer))

    console.log('/////////////////////////////')

    await fast
    console.log(getTimer(new Date().getTime(), fastTimer))
}

// concurrentFlow()

/**
 * @example
 */

const concurrentFlowWithPromiseAll = async () => {
    return Promise.all([slowPromiseFunction(), fastPromiseFunction()])
        .then(msg => {
            console.log(msg)
        })
        .catch(err => err)
}

// concurrentFlowWithPromiseAll()
