//Code to create an HTTP server
const http = require("http");

const server = http.createServer((request, response) => {
  //Route handling
  const url = request.url;
  //  console.log("Requested URL:", url);

  switch (url) {
    case "/about":
      //The /about route
      console.log("About page requested");
      break;
    case "/contact":
      //The /contact route
      console.log("Contact page requested");
      break;
    case "/products":
      // The /products route
      console.log("Products page requested");
      break;
    case "/subscribe":
      //The /subscribe route
      console.log("Subscribe page requested");
      break;
    default:
      //The default route (eg. '/', or Home);
      console.log("Home page requested");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
