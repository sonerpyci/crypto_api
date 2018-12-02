const express = require('express');
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
const registratedCoinsController = require('../controllers/registrated_coin');


router.get('/', registratedCoinsController.getAllRegisteredCoins);
router.get('/:id', registratedCoinsController.getRegisteredCoinById);
router.get('/registration/:id', registratedCoinsController.getRegisteredCoinByRegistrationId);
router.post('/', registratedCoinsController.createRegisteredCoin);

//router.post('/', checkAuth, upload.single('productImage'), productsController.product_create );

module.exports = router;