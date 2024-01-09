// self.onmessage and onmessage are the same
onmessage = function (message) {
    console.log("Worker has started working...");

    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += i;
    }

    console.log("Worker has finished working...");

    // self.postMessage and postMessage are the same
    postMessage(total);
};
