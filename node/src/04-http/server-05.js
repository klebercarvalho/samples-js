var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month + " " + q.name;
  res.end(txt);
}).listen(8080);

/*

The address:

http://localhost:8080/?year=2017&month=July

Will produce this result:

2017 July

*/