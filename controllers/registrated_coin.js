const models = require('../models');
const Registered_coin = models.Registered_coin;
const Registration = models.Registration;
//var Sequelize = require('sequelize');
//const Op = Sequelize.Op

exports.getAllRegisteredCoins = function (req, res, next) {
    Registered_coin.findAll().then((registrated_coins) => {
        res.json(registrated_coins);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}
exports.getRegisteredCoinById = function (req, res, next) {
    Registered_coin.findById(req.params.id, {
    }).then((registrated_coin) => {
        res.json(registrated_coin);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}

exports.getRegisteredCoinByRegistrationId = function (req, res, next) {
    Registered_coin.findAll({
        where:
            {registration_id: req.params.id},
        include: {
            model: models.Registration
        }
    }).then((registrated_coin) => {
        res.json(registrated_coin);
    }).catch((err) => {
        console.log(err);
        res.send("ERROR");
    });
}


exports.createRegisteredCoin = function (req, res, next) {
    Registered_coin.create({
        registration_id: req.body.registration_id,
        coinTicker: req.body.coinTicker,
        coinName: req.body.coinName,
        currentPrice: req.body.currentPrice,
        worth: req.body.worth,
        dailyIncome: req.body.dailyIncome,
        monthlyIncome: req.body.monthlyIncome,
        yearlyIncome: req.body.yearlyIncome,
        roi: req.body.roi,
        masternode_count: req.body.masternode_count,
        percentChange24h:req.body.percentChange24h,
        rank:req.body.rank,
        status: req.body.status,
        lastCheckTime: req.body.lastCheckTime
    }).then((result) => {
        Registration.update(
            {isCrawled: req.body.isCrawled},
            {where: {id: Number(req.body.registration_id) }}
        ).then(function(rowsUpdated) {
            console.log(rowsUpdated)
            result = JSON.parse(JSON.stringify({"success": true, "result": rowsUpdated}));
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.send("ERROR in CREATE MODULE");
        });
        result = JSON.parse(JSON.stringify({"success": true, "result": result}));
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.send("ERROR in CREATE MODULE");
    });
}
