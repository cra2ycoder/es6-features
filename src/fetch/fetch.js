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
