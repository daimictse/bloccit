// import and initialize Express app and the HTTP module
const app = require("./app");
const http = require("http");
// create the server
const server = http.createServer(app);

server.listen(3000);

server.on("listening", () => {
  console.log("server is listening for requests on port 3000");
});
