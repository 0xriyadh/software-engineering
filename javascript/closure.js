function stopWatch() {
    var startTime = Date.now();

    function getDelay() { 
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

// fake delay
for (var i = 0; i < 100000000; i++) {
    var foo = Math.random() * 10000000;
}

timer(); // prints the time elapsed from the timer creation