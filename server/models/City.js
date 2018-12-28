const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CitySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city: { type: String, required: true },
    state: { type: String, required: true },
    federal: { type: String, required: true },
}

);

module.exports = mongoose.model('cities', CitySchema);
