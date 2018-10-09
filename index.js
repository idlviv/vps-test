var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

server.listen(80, '127.0.0.1', function() {
    console.log('ser', server.address().port);
    console.log('ser', server.address());
});
