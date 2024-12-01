"use strict";
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};
function callAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}
callAfterDelay(() => greetUser("Alice"), 1000);
