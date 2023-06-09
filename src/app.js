'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();

// init middleware
app.use(morgan("dev")); // for logging
app.use(helmet()); // security middleware
app.use(compression());

// init database
require('./db/init.mongodb');

// init routes
app.get('/abc', (req, res) => {
    const data = 'hello world';
    return res.status(200).json({
        message: "Welcome",
        data: data
    })
})
// handle errors


module.exports = app;