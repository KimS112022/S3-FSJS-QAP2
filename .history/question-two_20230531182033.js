// Creating an HTTP server
const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
