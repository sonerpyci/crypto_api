const models = require('../models');
const Country = models.Country;

exports.getAllCountries = function (req, res, next) {
    Country.findAll().then((countries) => {
        res.json(countries);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.getUsersByCountry = function (req, res, next) {
    Country.findById(req.params.id, {
        include: [{
            model: models.Subsciber
        }],
    }).then((subscribers) => {
        res.json(subscribers);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });

}

exports.getCountryById = function (req, res, next) {
    Country.findById(req.params.id, {
    }).then((country) => {
        res.json(country);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

//Not Tested
/*exports.createSubscriber = function (req, res, next) {
    Subscriber.create({
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}*/
