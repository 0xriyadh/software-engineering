const fs = require("fs");
const http = require("http");
const os = require("os");

// Get the OS type of our machine
osType = os.type();

// Create a string of HTML content for a file we will create
htmlContent = `<html><h3>Hello, World! Your OS type is ${osType}</h3></html>`;

// Create an index.html file with the htmlContent variable as the content.
// Since this is async, we will provide a callback as a third argument
// that will run after the file has been created. It is in this callback that
// we will read the file. For code clarity, we won't handle errors.

fs.writeFile("./index.html", htmlContent, (err) => {
    const server = http.createServer((req, res) => {
        fs.readFile("index.html", (err, content) => {
            res.setHeader("Content-Type", "text/html");
            res.end(content);
        });
    });
    server.listen(9000, () => {
        console.log("Listening on port 9000!");
    });
});
