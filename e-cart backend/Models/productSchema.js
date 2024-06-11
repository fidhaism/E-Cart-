// Import the Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Define a schema for the product collection
const productSchema = new mongoose.Schema({
    // Define the id field with type Number, it is required and must be unique
    id: {
        type: Number,
        required: true,
        unique: true
    },
    // Define the title field with type String, it is required
    title: {
        type: String,
        required: true,
    },
    // Define the price field with type Number, it is required
    price: {
        type: Number,
        required: true,
    },
    // Define the description field with type String, it is required
    description: {
        type: String,
        required: true,
    },
    // Define the category field with type String, it is required
    category: {
        type: String,
        required: true,
    },
    // Define the image field with type String, it is required
    image: {
        type: String,
        required: true,
    },
    // Define the rating field as an object with subfields rate and count
    rating: {
        // Define the rate field inside the rating object with type Number, it is required
        rate: {
            type: Number,
            required: true,
        },
        // Define the count field inside the rating object with type Number, it is required
        count: {
            type: Number,
            required: true,
        }
    }    
});

// Create a Mongoose model named 'products' using the productSchema
const products = mongoose.model('products', productSchema);

// Export the model so it can be used in other parts of the application
module.exports = products;
