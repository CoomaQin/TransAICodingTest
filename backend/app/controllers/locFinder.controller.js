const model = require('../models/all.model.js');
const LocInfo = model.locInfo;

// Retrieve and return all location records from the database.
exports.findAll = (req, res) => {
    LocInfo.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                error: err || "Some error occurred while finding location records."
            });
        });
};


// insert a location record.
exports.create = (req, res) => {
    const locinfo = new LocInfo({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng,
        weather: req.body.weather,
        temperature: req.body.temperature,
        population: req.body.population,
    })

    locinfo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                error: err || "Some error occurred while creating a location record."
            });
        });
};