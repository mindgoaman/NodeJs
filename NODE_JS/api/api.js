const express = require('express');
const app = express();
const dbConnect = require('../mongodb/mongodb');

app.get('/', async (req, resp)=>{
    const db = await dbConnect()
    const result = await db.find().toArray();
    resp.send(result)
})

app.listen(3000);