// Creating an HTTP server
const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  switch (url) {
    case "/about":
      // Handle /about route
      console.log("About page requested");
      break;
    case "/contact":
      // Handle /contact route
      console.log("Contact page requested");
      break;
    case "/products":
      // Handle /products route
      console.log("Products page requested");
      break;
    case "/subscribe":
      // Handle /subscribe route
      console.log("Subscribe page requested");
      break;
    default:
      // Handle default route (e.g., '/')
      console.log("Home page requested");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
