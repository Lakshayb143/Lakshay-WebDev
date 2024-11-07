const express = require("express");
const morgan = require("morgan");

const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

const connect_db = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/nodeC")
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(3000);
    })
    .catch((err) => console.error(err));
};

connect_db();

// Setting up an express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set('views' , 'myviews'); // This will set the default folder for views to myviews.

// Middlewares

app.use(morgan("tiny"));

// middleware & static pages/Files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // for accepting form data

// Handling the request
app.get("/", (request, response) => {
  response.redirect("/blogs");
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

// Blog routes
app.use("/blogs", blogRoutes);

// 404 Error handling
app.use((request, response) => {
  // response.status(404).sendFile('./views/404.html' , {root : __dirname});
  response.status(404).render("404", { title: "404" });
});
