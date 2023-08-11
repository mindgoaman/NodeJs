const dbConnect = require('./mongodb');

const insertData = async (isMany, data) => {
    console.log("insert data")
    const db = await dbConnect()
    const insertResult = isMany ? await db.insertMany(data) :  await db.insertOne(data)
    if (insertResult?.acknowledged) {
         console.log("Data inserted successfully");
    }else{
         console.log("Data not inserted");
    }
}

module.exports = insertData;