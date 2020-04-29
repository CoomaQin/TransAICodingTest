module.exports = (app) => {
    const user = require('../controllers/user.controller.js')
    const locInfo = require('../controllers/locFinder.controller')

    // Create a new ip record
    app.post('/testuser', user.create);

    // Retrieve all ip record
    app.get('/testuser', user.findAll);

    // Retrieve all location record
    app.get('/location', locInfo.findAll);

    // Create a new location record
    app.post('/location', locInfo.create);

}   