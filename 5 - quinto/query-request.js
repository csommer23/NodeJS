'use strict';

let http = require('http')
   ,url = require('url');


http.createServer(function(req, resp){

    var result = url.parse(req.url, true);

    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write("<html><body>");
    resp.write("<h1>Querys required</h1>");
    resp.write("<ul>");

        for (var key  in result.query) {
            resp.write("<li>" + key + ":" + result.query[key] + "</li>")            
        }

    resp.write("</ul>");
    resp.write("</body></html>");
    resp.end();
}).listen(3000);