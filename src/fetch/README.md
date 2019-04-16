## fetch

**NOTE:**

> XMLHttpRequest and node-fetch is not core one, to use that we need to install them accordingly

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

## Reference Link

-   https://github.github.io/fetch/
-   https://www.npmjs.com/package/node-fetch
-   https://developers.google.com/web/updates/2015/03/introduction-to-fetch
