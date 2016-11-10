
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/test';

mongoose.connect(dbURI);

module.exports = mongoose;

mongoose.connection.on('connected', () => {
    console.log('connected in mongoDb');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('\nconnection in mongoDb closed');
        process.exit(0);
    });
});