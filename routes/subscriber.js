const express = require('express');
const router = express.Router();

//const checkAuth = require('../middleware/check-auth');
const subscribersController = require('../controllers/subscriber.js');


router.get('/', subscribersController.getAllSubscribers);
router.get('/:id', subscribersController.getSubscriberById);
router.post('/', subscribersController.createSubscriber);

//router.post('/', checkAuth, upload.single('productImage'), productsController.product_create );

module.exports = router;