const express = require("express");
const morgan = require('morgan');

// Some already created middlewares like helmet, morgan

// Setting up an express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set('views' , 'myviews'); // This will set the default folder for views to myviews.

// Listen for requests

app.listen(3000);

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
app.use(morgan('tiny'));

// app.use((request, response, next) => {
//   console.log("In the the next middle ware");
//   next();
// });


// middleware & static pages/Files
app.use(express.static('public'));





// Handling the request
app.get("/", (request, response) => {
  // old way
  // response.write('');
  // response.end();

  // or
  // response.send('<h1>Welcome to My First Express App.</h1>')

  // response.sendFile('./views/index.html', { root : __dirname});

  // Using view engine templates
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  response.render("index", { title: "Home", blogs });
});

app.get("/about", (request, response) => {
  // response.send('<h2>About page</h2>')
  // response.sendFile("./views/about.html", { root: __dirname });
  response.render("about", { title: "About" });
});

app.get("/blogs/create", (request, response) => {
  response.render("create", { title: "New Blog" });
});

// 404
app.use((request, response) => {
  // response.status(404).sendFile('./views/404.html' , {root : __dirname});
  response.status(404).render("404", { title: "404" });
});
