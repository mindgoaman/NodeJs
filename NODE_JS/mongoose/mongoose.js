const mongodbURL = "mongodb://localhost:27017/e-comm";
const mangoose = require('mongoose');

const main = async () => {
    await mangoose.connect(mongodbURL);
    const PRODUCT_SCHEMA = new mangoose.Schema({
         name: String,
         brand: String,
         price: Number,
    })

    const ProductModel = mangoose.model('products',PRODUCT_SCHEMA);
    const data = new ProductModel({name: 'Iphone 15 pro', brand: 'Apple', price: 120000});
    const result = await data.save();
    console.log("sharma6655",result);

}

main()
