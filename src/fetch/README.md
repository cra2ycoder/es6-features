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

## life cycle

-   fetch receives one mandatory argument path, that where we want to fetch the data.
    ex: `http://api.icndb.com/jokes/random/10`
-   it returns `Promise` object to get the response
-   we can pass `init` options as a second argument
