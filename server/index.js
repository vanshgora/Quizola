const express = require('express');
require('dotenv').config();
const userModel = require('./models/userModel');
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const session = require('express-session');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use('/', userRoute);

connectDB()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(PORT, async () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});