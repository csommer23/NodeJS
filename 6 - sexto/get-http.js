'use strict';

var http = require('http');

http.get({
    hostname: 'localhost',
    path: '/user?name=cristianos&active=true',
    port:3000,
    agent:false
}, (resp) => {

    let body = ''; 
 
    console.log('status:'+resp.statusCode);
    console.dir(resp.headers);

    resp.on('data',function(data){
        body += data;
    });

    resp.on('end',function(){
        console.log('resposta:',body);
    });

});