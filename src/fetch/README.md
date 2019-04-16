## fetch

**NOTE:**

> XMLHttpRequest and node-fetch is not core one in node, to use that we need to install them accordingly

```
yarn add xmlhttprequest
yarn add node-fetch
```

-   provides an interface for fetching resources
-   it is similar to `XMLHttpRequest`
-   provides more powerful and flexible features set
-   for simple understanding

```
 Javascript -> XMLHttpRequest
 Jquery -> $.ajax
 Node -> node-fetch
```

## life cycle

-   fetch receives one mandatory argument path, that where we want to fetch the data.
    ex: `http://api.icndb.com/jokes/random/10`
-   it returns `Promise` object to get the response
-   we can pass `init` options as a second argument

## syntax

```
fetch(url, options)
    .then(res => res.json()) // where we getting the entire response
    .then(data => {
        console.log(data) // where we get the particular data that we need
    })
    .catch(err => err) // error
```

## options properties

-   standard

```
method: 'GET',
headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
signal: null,       // pass an instance of AbortSignal to optionally abort requests
```

-   node-fetch additional

```
follow: 20,         // maximum redirect count. 0 to not follow redirect
timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies). Signal is recommended instead.
compress: true,     // support gzip/deflate content encoding. false to disable
size: 0,            // maximum response body size in bytes. 0 to disable
agent: null         // http(s).Agent instance, allows custom proxy, certificate, dns lookup etc.
```

## Reference Link

-   https://github.github.io/fetch/
-   https://www.npmjs.com/package/node-fetch
-   https://developers.google.com/web/updates/2015/03/introduction-to-fetch

## FAQ

-   How do I cancel a fetch() request?
    > At the moment there is no way to cancel a fetch, but this is being discussed on GitHub
    > https://github.com/whatwg/fetch/issues/20
