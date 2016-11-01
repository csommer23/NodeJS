'use strict'

const http = require('http');

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'DELETE',
    path: '/api/pokemons/5817fd4def7f810011c71e0c',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

function callback(res) {
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
}

const req = http.request(options, callback);

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();