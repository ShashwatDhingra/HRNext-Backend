const mongoose = require('mongoose');
const { log } = require('../utils/utils');

const mongoPass = process.env.MONGO_PASS

const mongoURI = '';

const dbConnection = mongoose.createConnection(mongoURI).on('open', () => {
    log('Connection established with MONGO DB.')
}).on('error', ()=>{
    log("Error while connecting to MONGO DB.")
})

module.exports = dbConnection