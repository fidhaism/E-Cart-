// Import the Express framework
const express = require('express');

// Import the productController which contains the logic for handling product-related routes
const productController = require('../Controllers/productController');

// Create an instance of an Express router
const router = express.Router();

// Define a route to get all products
// When a GET request is made to 'http://localhost:3000/allProducts', execute the getAllProducts function from the productController
router.get('/allProducts', productController.getAllProducts);

// Export the router so it can be used in other parts of the application
module.exports = router;
