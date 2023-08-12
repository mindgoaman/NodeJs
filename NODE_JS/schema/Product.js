const mangoose = require('mongoose');
const PRODUCT_SCHEMA = new mangoose.Schema({
    name: String,
    brand: String,
    price: Number,
})

module.exports = PRODUCT_SCHEMA