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
    }, 200)
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
