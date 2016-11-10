
const _schema = require('./schema');
const mongoose = _schema.mongoose;

const data = {name: 'teste', age: 22};

var Model = mongoose.model('peoples',_schema.schema);
var _people = new Model(data);

_people.save((err,data) => {
    if(err) return console.log('error: ', err);
    console.log('insert: ',data);
});