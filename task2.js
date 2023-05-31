const fs = require("fs");

const server = http.createServer((request, response) => {
  const url = request.url;

  switch (url) {
    case "/about":
      fs.readFile("views/about.html", "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end("File not found");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;

    case "/contact":
      fs.readFile("views/contact.html", "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end("File not found");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;

    case "/products":
      fs.readFile("views/products.html", "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end("File not found");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;

    case "/subscribe":
      fs.readFile("views/subscribe.html", "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end("File not found");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;

    case "/default":
      fs.readFile("views/default.html", "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end("File not found");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
  }
});
