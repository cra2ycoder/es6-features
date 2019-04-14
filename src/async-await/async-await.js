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
toDo()
