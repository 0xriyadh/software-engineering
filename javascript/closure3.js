// closure with fetch
function apiFunction(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("the url: ", url);
            console.log(data);
        });
    console.log("fetching offloaded to the browser runtime environment");
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");

// We see that even though the apiFunction has finished executing, fetch is still able to access the url variable. This is possible only because of closures. The url variable is stored in the lexical environment of the apiFunction and is available to the fetch function even after the apiFunction has finished executing.