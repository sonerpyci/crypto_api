const express = require('express');
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
const registrationsController = require('../controllers/registration.js');


router.get('/', registrationsController.getAllRegistrations);
router.get('/:id', registrationsController.getRegistrationById);
router.post('/', registrationsController.createRegistration);

//router.post('/', checkAuth, upload.single('productImage'), productsController.product_create );

module.exports = router;