var http = require('http');

var server = http.createServer(function (req, res) {

})

server.listen(8080, function() {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('server port' + server.address().port);
  res.end();
    console.log('server port', server.address().port);
    console.log('ser', server.address());
});
