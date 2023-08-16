const { PRODUCTS_SCHEMA } = require('../schemas/ProductsSchema');
const { PRODUCTS_COLLECTION } = require('../constants/DBConstants');
const mongoose = require('mongoose');
const ProductsModel = new mongoose.model(
     PRODUCTS_COLLECTION,
     PRODUCTS_SCHEMA
)

module.exports = {
      ProductsModel
}