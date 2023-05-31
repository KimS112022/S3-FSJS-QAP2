//Code to create an HTTP server
const http = require("http");

const server = http.createServer((request, response) => {
  //Route handling
  const url = request.url;
  console.log("Requested URL:", url);
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
