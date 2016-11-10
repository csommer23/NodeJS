const mongoose = require('./config');

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    name: String,
    age: Number
});

module.exports = {
    schema: peopleSchema,
    mongoose: mongoose
}