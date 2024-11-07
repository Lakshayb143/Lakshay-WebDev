const express = require('express');

// Setting up an express app
const app = express();

// register view engine
// app.set('view engine' , 'ejs');
// app.set('views' , 'myviews'); // This will set the default folder for views to myviews.


// Listen for requests

app.listen(3000);

// the above line return a instance of server
// we can store for reuse for something like web sockets.

// Handling the request

app.get('/', (request , response) => {
    // old way
    // response.write('');
    // response.end();

    // or 
    // response.send('<h1>Welcome to My First Express App.</h1>')

    response.sendFile('./views/index.html', { root : __dirname});
});

app.get('/about', (request , response) => {
    // response.send('<h2>About page</h2>')
    response.sendFile("./views/about.html", { root: __dirname });
})


// redirects
app.get('/about-us' , (request , response) => {
    response.redirect('/about');
})

// 404
app.use((request , response ) => {
    response.status(404).sendFile('./views/404.html' , {root : __dirname});
});















