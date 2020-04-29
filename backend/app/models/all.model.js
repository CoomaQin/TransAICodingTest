const mongoose = require('mongoose');

const testUserSchema = mongoose.Schema({
    fullname: String,
    birthday: Date,
    email: String,
    phone: String,
}, {
    timestamps: true
});

const locInfoSchema = mongoose.Schema({
    name: String,
    lat: String,
    lng: String,
    weather: String,
    temperature: String,
    population: String,
}, {
    timestamps: true
});

module.exports.user = mongoose.model('TestUser', testUserSchema);
module.exports.locInfo = mongoose.model('LocInfo', locInfoSchema);