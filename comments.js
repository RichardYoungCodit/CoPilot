// create web server
// create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello World</h1>
// create a web server that can listen to requests for /goodbye and responds with some HTML that says <h1>Goodbye World</h1>
// create a third request handler that listens to requests for /cat and send back a picture of a cat. You will need to read up on the documentation for the request module in order to figure out how to use it to make a request for an image.
// Don't forget to use fs.readFile to send an html file back to the user for the /hello and /goodbye requests. You should not need to do this for /cat because you will use request to make a request for an image.

var http = require('http');
var fs = require('fs');
var request = require('request');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  if (req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/hello.html').pipe(res);
  } else if (req.url === '/goodbye') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/goodbye.html').pipe(res);
  } else if (req.url === '/cat') {
    request('http://placekitten.com/g/200/300').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});