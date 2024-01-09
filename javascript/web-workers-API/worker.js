// Description: This file contains the code for the worker thread.

// this.onmessage and onmessage are the same
// receives message from main thread using onmessage event handler
// waits for message from main thread
onmessage = function (message) {
    console.log("Message from Main Thread: ", message.data);
    console.log("The worker has started working!");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total += i;
    }
    console.log("The worker has finished working!");

    // this.postMessage and postMessage are the same
    // sends message to main thread using postMessage method
    postMessage(total);
};