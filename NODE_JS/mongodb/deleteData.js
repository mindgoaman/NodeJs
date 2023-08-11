const dbConnect = require('./mongodb');

const deleteData = async (isMany, dataForbeDeleted) => {
    console.log("insert data")
    const db = await dbConnect()
    const insertResult = isMany ? await db.deleteMany(dataForbeDeleted) :  await db.deleteOne(dataForbeDeleted)
    if (insertResult?.acknowledged) {
         console.log("Data inserted successfully");
    }else{
         console.log("Data not inserted");
    }
}

module.exports = deleteData;