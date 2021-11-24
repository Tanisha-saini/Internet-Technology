var protocol = require('http');
var f=require('fs');
var port_no = 300;
var new_server=protocol.createServer (function(request, response){
    f.readFile('a.txt',function(status,result){
        response.write(result);
        response.end();
    });
});

new_server.listen(port_no, '127.0.0.1');