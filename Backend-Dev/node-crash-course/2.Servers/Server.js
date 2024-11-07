const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Request made : ");
  console.log(request.url, request.method);

  // Setting up the Response

  // set header content type
  // response.setHeader('Content-Type', 'application/json');
  // response.setHeader('Content-Type', 'text/plain');
  response.setHeader("Content-Type", "text/html");

  // Writing the response
  // response.write("Hello, THe message from the server.");
  response.write("<head> <link rel='stylesheet' href='#'></head>");
  response.write("<h1>Welcome to the site !!</h1>");

  response.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
