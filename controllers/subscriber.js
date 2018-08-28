const models = require('../models');
const Subscriber = models.Subscriber;

exports.getAllSubscribers = function (req, res, next) {
    Subscriber.findAll().then((subscribers) => {
        res.json(subscribers);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}
exports.getSubscriberById = function (req, res, next) {
    Subscriber.findById(req.params.id, {
    }).then((subscriber) => {
        res.json(subscriber);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.createSubscriber = function (req, res, next) {
    Subscriber.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        cell_phone: req.body.phone,
        country_id: req.body.country_id
    }).then((result) => {
        result = JSON.parse(JSON.stringify({"success":true, "result":result}));
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}
