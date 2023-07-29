const express = require('express');
const cors = require('cors')
const connectDB = require('./config/database');
const productRoute = require('./routes/productRoute');
console.log("App Import Line -> Working Good");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
console.log("App Construct Line -> Working Good");

connectDB();

app.use('/product', productRoute);

module.exports = app;