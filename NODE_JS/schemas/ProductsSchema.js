const mangoose = require('mongoose');
const PRODUCTS_SCHEMA = new mangoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

module.exports = {
    PRODUCTS_SCHEMA
}