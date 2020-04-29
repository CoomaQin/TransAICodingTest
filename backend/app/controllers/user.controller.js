const model = require('../models/all.model.js');
const User = model.user

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        var intlCode = (match[1] ? '+1 ' : '')
        return [match[2], match[3], match[4]].join('')
    }
    return null
}

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if ((!req.body.fullname) || (!req.body.birthday) || (!req.body.email) || (!req.body.phone)) {
        return res.status(400).send({
            error: "bad request format"
        });
    }
    let birthDate = new Date(req.body.birthday)
    let user = new User({
        fullname: req.body.fullname,
        birthday: birthDate,
        email: req.body.email,
        phone: formatPhoneNumber(req.body.phone),
    });
    console.log(user)

    User.find({
        $or: [
            { 'email': user.email },
            { 'phone': user.phone }
        ]
    }).then((result) => {
        if (result.length > 0) {
            errMsg = ''
            result.forEach((item) => {
                if (item.email == user.email) {
                    errMsg += 'the email is taken\n'
                }
                if (item.phone == user.phone) {
                    errMsg += 'the phone is taken'
                }
            })
            return Promise.reject(errMsg)
        }
        else
            return user.save()
    }).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            error: err || "Some error occurred while creating the user."
        });
    })

};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                error: err || "Some error occurred while retrieving users"
            });
        });
};
