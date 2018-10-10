var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('server started');
  res.end();
})

server.listen(8080, function() {
    console.log('server port', server.address().port);
    console.log('ser', server.address());
});
