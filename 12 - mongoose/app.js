const mongoose = require('./config');

const schema = require('./schema')(mongoose);

const data = {name: 'Sommer', age: 22};

var model = mongoose.model('peoples',schema);
var people = new model(data);

people.save((err,data) => {
    if(err) return console.log('error: ', err);
    console.log('insert: ',data);
});