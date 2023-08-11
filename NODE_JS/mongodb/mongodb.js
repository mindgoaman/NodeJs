//mondgo db connection with node js
const {MongoClient} = require('mongodb');
const databaseName = 'e-comm'
const mongodbPathURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbPathURL);

const dbConnect = async () => {
    let result = await client.connect()
    let db = result.db(databaseName)
    return collection = db.collection('products')
    
}

module.exports = dbConnect