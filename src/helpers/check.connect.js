'use strict';

const mongoose = require('mongoose');
const countConnect = () => {
    const countConnections = mongoose.connections.length;
    console.log('Number of connections:' + countConnections);
}

module.exports = {
    countConnect
};