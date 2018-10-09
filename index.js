var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(80, '176.114.8.203', function() {
    console.log('176.114.8.203:80');
});