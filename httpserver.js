const { setDefaultResultOrder } = require("dns");
const http = require("http");
var server = http.createServer((request, response) => {
  response.write("hello i am server");
  response.end();
});
server.listen(3000);
console.log("server started...");
