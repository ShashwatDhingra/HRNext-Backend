// Imports
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// Route Import
const authRoute = require('./routes/auth.route')

// Configurations
require('dotenv').config()


const app = express()
app.use(bodyParser.json())
app.use(morgan('dev')) // For API Response logs.
app.use(cors())

// Using Routes
const baseUrl = '/api/v1';
app.use(`${baseUrl}/auth`, authRoute)


module.exports = app;
