const dbConnect = require('./mongodb');
const readData = async () => {
     const result = await dbConnect();
     const response = await result.find({}).toArray();
     return response;
}

module.exports = readData;
