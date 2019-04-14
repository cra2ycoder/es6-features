## promises

-   used to handle asynchronous(async) functions
-   easy to manage when dealing with multiple async operations such as:
    -   where callbacks create callback
    -   api calls execution
-   provide better error handling than events and callbacks

## benefits

-   Improves Code Readability
-   Better handling of asynchronous operations
-   Better flow of control definition in asynchronous logic
-   Better Error Handling

## syntax

```
var myPromise = new Promises(executor)

var myPromise = new Promises((resolve, reject) => {
    // statement goes here
    // resolve({})
    // reject({})
})

```

## life cycle

-   **pending:** api request to the server and waiting for response
-   **resolved:** successfully server sends the response
-   **rejected:** operation failed due to some error
