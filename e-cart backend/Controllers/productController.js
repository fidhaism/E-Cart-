// Import the products model which interacts with the 'products' collection in the database
const products =  require('../Models/productSchema');

// Export the getAllProducts function to be used as a route handler
exports.getAllProducts = async (req, res) => {
    // Use a try-catch block to handle potential errors
    try {
        // Fetch all products from the database using the find() method on the products model
        const allProducts = await products.find();
        
        // If successful, respond with a status code of 200 (OK) and the list of products in JSON format
        res.status(200).json(allProducts);
    } catch (err) {
        // If an error occurs, respond with a status code of 404 (Not Found) and the error message in JSON format
        res.status(404).json(err);
    }
};
