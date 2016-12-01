
function getSchema(mongoose) {
    const Schema = mongoose.Schema;

    return peopleSchema = new Schema({
        name: String,
        age: Number
    });
}

module.exports = function(mongoose) {    
    return getSchema(mongoose);
}