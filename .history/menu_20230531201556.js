const express = require("express");
const fs = require("fs");
const app = express();

// Define your routes here

// Middleware to include the menu on each page
app.use((req, res, next) => {
  fs.readFile("menu.html", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading menu.html:", err);
      return next();
    }
    res.locals.menu = data;
    next();
  });
});

// Route handlers
app.get("/", (req, res) => {
  // Example usage: rendering a template file
  res.render("home", { menu: res.locals.menu });
});

app.get("/about", (req, res) => {
  // Example usage: rendering a template file
  res.render("about", { menu: res.locals.menu });
});

// Add more route handlers for your other routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
