// Creating an HTTP server
const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  switch (url) {
    case "about":
      //The /about route
      console.log("About page requested");
      break;
    case "contact":
      //The /contact route
      console.log("Contact page requested");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
