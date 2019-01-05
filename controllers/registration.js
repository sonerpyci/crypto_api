const models = require('../models');
const Registration = models.Registration;
const Registered_coin = models.Registered_coin;

exports.getAllRegistrations = function (req, res, next) {
    Registration.findAll({
        include: {
            model: models.Registered_coin,
            order: [
                [models.Registered_coin, 'id', 'asc']
            ]/*,
            limit: 1*/
        },
        where: {
            isCrawled: 1
        }
    }).then((registrations) => {
        res.json(registrations);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.getAllRegistrationsIncludedPassives = function (req, res, next) {
    Registration.findAll({
        include: {
            model: models.Registered_coin,
            order: [
                [models.Registered_coin, 'id', 'asc']
            ]/*,
            limit: 1*/
        }
    }).then((registrations) => {
        res.json(registrations);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}


exports.getRegistrationById = function (req, res, next) {
    Registration.findById(req.params.id, {
    }).then((registration) => {
        res.json(registration);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.getRegistrationByName = function (req, res, next) {
    Registration.find({
        where: {
            coinName: req.params.id,
        },
        include: {
            model: models.Registered_coin,
            order: [
                [models.Registered_coin, 'id', 'asc']
            ]
        }
    }).then((registration) => {
        res.json(registration);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.createRegistration = function (req, res, next) {
    Registration.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        coinTicker: req.body.coinTicker,
        coinName: req.body.coinName,
        collateralAmount: req.body.collateralAmount,
        watchDog: req.body.watchDog,
        sentinelRequired: req.body.sentinelRequired,
        isCrawled: 0,//default
        btcTalkAnn: req.body.btcTalkAnn,
        betweenBlocksAnn: req.body.betweenBlocksAnn,
        github: req.body.github,
        sourceCode: req.body.sourceCode,
        selectxchange: req.body.selectxchange.toString(),//[ "a" , "b" , "c"] => "a,b,c"
        xchgUrl: req.body.xchgUrl,
        homepage: req.body.homepage,
        telegram: req.body.telegram,
        discord: req.body.discord,
        twitter: req.body.twitter,
        blockExplorer: req.body.blockExplorer,
        coinLogo: req.body.coinLogo
    }).then((result) => {
        Registered_coin.create({
            registration_id: result.id,
            coinName: req.body.coinName,
            coinTicker: req.body.coinTicker
        }).then((result) => {
            result = JSON.parse(JSON.stringify({"success":true, "result":result}));
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.send("ERROR 1");
        });
    }).catch((err) => {
        console.log(err);
        res.send("ERROR 2");
    });

}
