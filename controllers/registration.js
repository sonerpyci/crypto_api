const models = require('../models');
const Registration = models.Registration;

exports.getAllRegistrations = function (req, res, next) {
    Registration.findAll().then((registrations) => {
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
        result = JSON.parse(JSON.stringify({"success":true, "result":result}));
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}
