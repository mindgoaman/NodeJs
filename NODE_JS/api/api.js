const express = require('express');
const dbConnect = require('../mongodb/mongodb');
const app = express();
app.use(express.json())

app.get('/', async (req, resp)=>{
    const db = await dbConnect()
    const result = await db.find().toArray();
    resp.send(result)
})

app.post('/', async(req, resp)=>{
    const db = await dbConnect();
    const result = await db.insertOne(req.body)
    if(result?.acknowledged){
         console.log("data inserted")
    }else{
         console.log("data not inserted")
    }
    resp.send(req.body)
})

app.put('/:name', async(req, resp)=>{
    const db = await dbConnect();
    const result = await db.updateOne({name: req.params.name},{$set: req.body})
    resp.send(req.body)
    if(result?.acknowledged){
        console.log("data updated")
   }else{
        console.log("data not updated")
   }
})

app.delete('/:name', async(req, resp)=>{
    const db = await dbConnect();
    const result = await db.deleteOne({name: req.params.name})
    resp.send(req.params.name)
    if(result?.acknowledged){
        console.log("data deleted")
   }else{
        console.log("data not deleted")
   }
})

app.listen(3000);
