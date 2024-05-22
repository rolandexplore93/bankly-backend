require('dotenv').config(); // Load environment variables
require('./config/database')
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); // Initialize express application
const port = process.env.PORT || 3000; // Setup PORT for the server
 
// Middleware and cors
app.use(cors());
app.use(express.json()); // Parse application/json
app.use(express.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// Routes
app.use(routes)

// Server setup
app.listen(port, console.log(`Listening to the server at port: ${port}`))
