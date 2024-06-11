// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Express framework
const express = require('express');

// Import the CORS middleware to enable Cross-Origin Resource Sharing
const cors = require('cors');

const router = require('./Router/router')

// Import the database connection module (ensure that this file is correctly set up)
const db = require('./Connection/db')

// Create an instance of an Express application
const ecartServer = express();

// Middleware setup -->  Enable CORS for all routes
ecartServer.use(cors());

// Enable parsing of JSON bodies in requests
ecartServer.use(express.json());
ecartServer.use(router);

// Set the port to listen on - If an environment variable named PORT is set, use it; otherwise, default to 3000
const PORT = 3000 || process.env.PORT;

// Start the server and listen on the specified port
ecartServer.listen(PORT, () => {
  console.log(`E-CART Server is running on port ${PORT}`);
});

// Define a simple route for the root URL --> Responds with 'Hello World! E-CART Server here.' when accessed
ecartServer.get('/', (req, res) => {
  res.send('Hello World!  E-CART Server here.');
});
