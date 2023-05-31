const EventEmitter = require("events");

class myEmitter extends EventEmitter {}

const myEmitter = new myEmitter();

//Event listener for capturing HTTP status codes
myEmitter.on("httpStatusCode", (statusCode) => {
  console.log("HTTP status code:", statusCode);
});

//To emit event when status code is available
myEmitter.emit("httpStatusCode", 200);
