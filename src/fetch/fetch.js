// fetch('http://api.icndb.com/jokes/random/10')

import { XMLHttpRequest } from 'xmlhttprequest'
import fetch from 'node-fetch'

const resourceURL = 'http://api.icndb.com/jokes/random/10'

/**
 * @example
 * basic XMLHttPRequest
 */

function getResponse() {
    console.log('response!')
    console.log(this.responseText)
}

function getError(err) {
    console.log('error!')
    console.log(err)
}

// const api = new XMLHttpRequest()
// api.onload = getResponse
// api.onerror = getError
// api.open('get', resourceURL, true)
// api.send()

/**
 * @example
 * using fetch
 */

function fetchExample1() {
    fetch(resourceURL)
        .then(res => {
            console.log(res)
            console.log(res.status)
            // Examine the text in the response
            res.json().then(function(data) {
                console.log(data)
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// fetchExample1()

console.log('/////////////////////////////////')

/**
 * @example
 */
function fetchExample2() {
    fetch(resourceURL)
        .then(res => {
            // console.log(res)

            console.log(res.url)
            console.log(res.status)
            console.log(res.statusText)

            /**
             * @note
             * get header response
             */
            console.log(res.headers)
            console.log(res.headers.get('server'))

            /**
             * @important @note
             * res.json() should be return to receive the data in another then()
             *
             * */
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

// fetchExample2()

console.log('/////////////////////////////////')

/**
 * @example 3
 * chaining promises
 */

function fetchExample3() {
    const fetchStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    const fetchJSON = response => {
        return response.json()
    }

    const fetchData = data => {
        console.log(data)
    }

    const fetchError = err => {
        console.log(err)
    }

    fetch(resourceURL)
        .then(fetchStatus)
        .then(fetchJSON)
        .then(fetchData)
        .catch(fetchError)
}

// fetchExample3()
console.log('/////////////////////////////////')

/**
 * @description
 * Javascript -> XMLHttpRequest
 * Jquery -> $.ajax
 * Node -> node-fetch
 */
function fetchExample4() {
    const fr = fetch('https://ntryogep.sirv.com/myresumebk/mine.json')
    // @life cycle 1: -> promise object has been created and it is in pending state

    fr.then(res => {
        console.log(res) // -> entire raw data of fetch
        console.log(res.url) // -> a particular url that we given
        console.log(res.status) // -> response status code such as 200, 300, 400 etc.,
        console.log(res.statusText) // -> response status message
        console.log(res.headers) // -> response headers

        return res.json()
    })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

// fetchExample4()

console.log('/////////////////////////////////')

/**
 * @example
 * passing request params
 * 1. Post Request
 */

function fetchExample5() {
    const options = {
        method: 'get'
        // headers: {
        //     'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        // }
    }
    fetch(resourceURL, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

fetchExample5()
