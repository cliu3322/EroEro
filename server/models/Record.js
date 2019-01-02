const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RecordSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    contactmethod: { type: Array, required: true },
    contactway: { type: Array, required: true },
    phone: { type: String, required: true },
    aphone: { type: String, required: false },
    email: { type: String, required: false },
    wechat: { type: String, required: false },
    line: { type: String, required: false },
    whatsapp: { type: String, required: false },
    kakao: { type: String, required: false },
    ethnicity: { type: String, required: true },
    service: { type: Array, required: true },
    city: { type: Array, required: false },
    address: { type: String, required: false },
    markers: { type: Array, required: false },
    images:{ type: Array, required: false },
}

);

module.exports = mongoose.model('records', RecordSchema);
