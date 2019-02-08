const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CityxRecordSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    ethnicity: { type: String, required: false },
    incall: { type: String, required: false },
    outcall: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    federal: { type: String, required: false },
    pagelinks: { type: String, required: false },
    location: { type: String, required: false },
    markers: { type: Array, required: false },
    pic:{ type: Array, required: false },
    locationId: { type: mongoose.Schema.Types.ObjectId, required: false },
    createdate:{ type: Date, required: true },
    lastUpdated:{ type: Date, required: false },
    status: { type: String, required: false },
}

);

module.exports = mongoose.model('cityxguiderecords_1', CityxRecordSchema);
