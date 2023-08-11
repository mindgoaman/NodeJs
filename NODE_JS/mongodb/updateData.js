const dbConnect = require('./mongodb');

const updateData = async (isMany, dataForbeUpdated, dataTobeUpdated) => {
    const db = await dbConnect()
    const insertResult = isMany ? await db.updateMany(dataForbeUpdated,{$set: dataTobeUpdated}) : await db.updateOne(dataForbeUpdated,{$set: dataTobeUpdated})
    if (insertResult?.acknowledged) {
         console.log("Data updated successfully");
    }else{
         console.log("Data not updated");
    }
}

module.exports = updateData;