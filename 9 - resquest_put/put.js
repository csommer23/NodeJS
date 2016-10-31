'use strict'

const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify({
    name: 'Cristiano Sommer',
});

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'PUT',
    path: '/api/pokemons/58142c5a449ba10011f0fd67',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

function callback(res) {
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));

    let data = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Dados:', data)
    });
}

const req = http.request(options, callback);

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();