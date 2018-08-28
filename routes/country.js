const express = require('express');
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
const countriesController = require('../controllers/country.js');


router.get('/', countriesController.getAllCountries);
router.get('/:id/subscribers', countriesController.getUsersByCountry);
router.get('/:id', countriesController.getCountryById);
//router.post('/', countriesController.createCountry);

//router.post('/', checkAuth, upload.single('productImage'), productsController.product_create );

module.exports = router;