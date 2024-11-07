const http = require("http");
const fileSystem = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  // Setting up the response
  response.setHeader("Content-Type", "text/html");

  // send an html file
  fileSystem.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      response.end();
      return;
    }
    // response.write(data);
    // if we are returning a single response ,we can pass it in end
    response.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests...");
});
