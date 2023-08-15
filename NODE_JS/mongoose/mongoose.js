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

// const { ProductsModel } = require('../models/ProductsModel');
// require('./config');

// const readDataFromDB = async () => {
//     // for saving data
//     // const products = ProductsModel({name: 'Iphone 29 pro', brand: 'Apple', price: 225000, category: 'Electronics'});
//     const result =  await ProductsModel.find();
//     console.log("sharma6655",result);

// }

// readDataFromDB()



const { ProductsModel } = require('../models/ProductsModel');
const express = require('express');
const app = express();
require('./config');
app.use(express.json())

//create or save data in db
app.post('/create-products', async(req, resp) => {
    const products = ProductsModel(req.body)
    const result = await products.save()
    console.log(req.body)
    resp.send(result)
})

app.get('/get-products', async(req, resp) => {
    const result = await ProductsModel.find()
    resp.send(result)
})

app.put('/update-product/:_id',async(req, resp)=>{
    const result = await ProductsModel.updateOne(req.params,{$set:req.body})
    console.log(result)
    resp.send(result)
})

app.delete('/delete-product/:_id', async(req, resp)=>{
    const result = await ProductsModel.deleteOne(req.params)
    console.log(result)
    resp.send(result)
})

//search on single field and multiples fields
app.get('/search/:key', async(req, resp)=>{
     const result = await ProductsModel.find({
        "$or": [
             {name: {$regex:req.params.key}},
             {category: {$regex:req.params.key}}
        ]
     })
     resp.send(result)
})

app.listen(3000)
