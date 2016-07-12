// require directive to load http module and store returned HTTP instance into http variable
var http = require("http");

//http.createServer() method to create server instance and then we bind it at port 8081 using listen method
http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello User, Thanks for Reach here\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');