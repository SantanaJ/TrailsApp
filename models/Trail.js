const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TrailSchema = new Schema({

    name: String,
    latitude: Number,
    longitude: Number,
    state: String,
    park: String
    
});

module.exports = mongoose.model('Trail', TrailSchema);