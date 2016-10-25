var http = require('http')
    , fs = require('fs')
    , index = fs.readFileSync('index.html');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(index);
}).listen(3000);