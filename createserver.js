var protocol = require('http');
var port_no = 10000;
var new_server=protocol.createServer (function(request, response){
    response.setHeader('content-type', 'text/html');
    response.write("<h1> Hello world, This is my node.js server!!</h1>");
    response.end();

});

new_server.listen(port_no, '127.0.0.1');