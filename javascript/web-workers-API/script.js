// create a new worker thread
const worker = new Worker("worker.js");

const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");

totalButton.addEventListener("click", () => {
    let total = 0;

    // sends message to worker thread using postMessage method
    worker.postMessage("Kindly Start Working!");
});

// receives message from worker thread using onmessage event handler
// waits for message from worker thread
worker.onmessage = function (message) {
    console.log("Message from Worker: ", message.data);
};

bgButton.addEventListener("click", () => {
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
});
