"use strict";
var greetUser = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
function callAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}
callAfterDelay(function () { return greetUser("Alice"); }, 1000);
