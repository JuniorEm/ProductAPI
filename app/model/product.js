var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

module.exports = productSchema;