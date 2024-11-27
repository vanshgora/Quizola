// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config();
const PROD_ENV = process.env.PROD_ENV;
const MONGO_URI = (PROD_ENV === 'true') ? JSON.parse(process.env.DB_URL).PROD : JSON.parse(process.env.DB_URL).DEV;

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI).then(() => console.log('vansh'));
    } catch(err) {
        console.log(err);
    }

}

module.exports = connectDB;