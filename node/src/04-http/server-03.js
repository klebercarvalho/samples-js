var http = require('http');
http.createServer(function (req, res) {
  // Add an HTTP Header
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
