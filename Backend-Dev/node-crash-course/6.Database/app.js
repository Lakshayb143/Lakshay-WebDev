const express = require("express");
const morgan = require("morgan");

const mongoose = require("mongoose");
const Blog = require("./models/blog");

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
// Some already created middlewares like helmet, morgan

// Setting up an express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set('views' , 'myviews'); // This will set the default folder for views to myviews.

// Listen for requests

// app.listen(3000);

// the above line return a instance of server
// we can store for reuse for something like web sockets.

// Middlewares

// app.use((request, response, next) => {
//   console.log("New request made !!");
//   console.log("host : " + request.hostname);
//   console.log("path : " + request.path);
//   console.log("method : " + request.method);
//   next();
// });

// Rather we can use morgan
app.use(morgan("tiny"));

// app.use((request, response, next) => {
//   console.log("In the the next middle ware");
//   next();
// });

// middleware & static pages/Files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // for accepting form data

// Mongoose and Mongo sandbox routes
app.get("/add-blog", (request, response) => {
  const newBlog = new Blog({
    title: "New Blog 2",
    snippet: "Sample blog",
    body: "More about my new blog",
  });

  newBlog
    .save()
    .then((result) => response.send(result))
    .catch((err) => console.log(err));
});

// app.get("/all-blogs", (request, response) => {
//   Blog.find()
//     .then((result) => response.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/single-blog", (request, response) => {
//   Blog.findById("65d4e5a298d8d6438b5cd5a0")
//     .then((result) => response.send(result))
//     .catch((err) => console.log(err));
// });

// Handling the request
app.get("/", (request, response) => {
  // old way
  // response.write('');
  // response.end();

  // or
  // response.send('<h1>Welcome to My First Express App.</h1>')

  // response.sendFile('./views/index.html', { root : __dirname});

  // Using view engine templates
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // response.render("index", { title: "Home", blogs });

  response.redirect("/blogs");
});

app.get("/about", (request, response) => {
  // response.send('<h2>About page</h2>')
  // response.sendFile("./views/about.html", { root: __dirname });
  response.render("about", { title: "About" });
});

// Blog routes

app.get("/blogs", (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      response.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (request, response) => {
  response.render("create", { title: "New Blog" });
});

// Managing Post requests
app.post("/blogs", (request, response) => {
  // console.log(request.body);
  const blog = new Blog(request.body);

  blog
    .save()
    .then(() => response.redirect("/blogs"))
    .catch((err) => console.log(err));
});

// Specific and request parameters
app.get("/blogs/:id", (request, response) => {
  const id = request.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      response.render("details", { blog: result, title: "Blogs Details" });
    })
    .catch((err) => console.log(err));
});

// DELETE request handling
app.delete("/blogs/:id", (request, response) => {
  const id = request.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      // response.redirect("/blogs"); // can't do here because of ajax request
      response.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

// 404
app.use((request, response) => {
  // response.status(404).sendFile('./views/404.html' , {root : __dirname});
  response.status(404).render("404", { title: "404" });
});
