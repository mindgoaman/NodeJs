// const PRODUCT_SCHEMA = require('../schema/Product');
// const mongodbURL = "mongodb://localhost:27017/e-comm";
// const mangoose = require('mongoose');
//       mangoose.connect(mongodbURL);

// //save data into db(create operation)
// const saveDataInDB = async () => {
//     const product = mangoose.model('products',PRODUCT_SCHEMA);
//     const data = new product({name: 'Iphone 22 pro', brand: 'Apple', price: 225000, category: 'Electronics'});
//     const result = await data.save();
//     console.log("sharma6655",result);

// }

// //save data into db(create operation)
// const readDataFromDB = async () => {
//     const product = mangoose.model('products',PRODUCT_SCHEMA);
//     const result = await product.find();
//     console.log("sharma6655",result);

// }

// //save data into db(create operation)
// const updateDataInDB = async () => {
//     const product = mangoose.model('products',PRODUCT_SCHEMA);
//     const result = await product.updateOne({name: 'Iphone 22 pro'},{$set: {
//         "brand": "Apple 2",
//         "price": 230000,
//     }});
//     console.log("sharma6655",result);

// }
// //save data into db(create operation)
// const deleteDataInDB = async () => {
//     const product = mangoose.model('products',PRODUCT_SCHEMA);
//     const result = await product.deleteOne({name: 'Iphone 22 pro'});
//     console.log("sharma6655",result);

// }

// saveDataInDB()
// readDataFromDB()
// updateDataInDB()
// deleteDataInDB()

const { ProductsModel } = require('../models/ProductsModel');
require('./config');

const readDataFromDB = async () => {
    // const products = ProductsModel({name: 'Iphone 29 pro', brand: 'Apple', price: 225000, category: 'Electronics'});
    const result =  await ProductsModel.find();
    console.log("sharma6655",result);

}

readDataFromDB()

