const button = document.getElementById("button");

// implementation 1
function myDebounceFunction(callback, delay) {
    return function () {
        clearTimeout(myDebounceFunction.timer);
        console.dir(myDebounceFunction);

        // this setTimeout returns a timer id
        myDebounceFunction.timer = setTimeout(() => {
            callback();
        }, delay);
    };
}

// implementation 2
function myDebounceFunction(callback, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback();
        }, delay);
        console.log(timeoutId);
    };
}

button.addEventListener(
    "click",
    myDebounceFunction(() => {
        console.log("Button clicked");
    }, 2000)
);
