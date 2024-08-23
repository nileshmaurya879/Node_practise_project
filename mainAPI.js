const express = require('express');
const dbconnect = require('./mongoDBDatabase')
const mongodb = require("mongodb")
const app = express();

// Middleware to parse JSON data
app.use(express.json());


//Get Data from mongodb
app.get('/GetTest',async (req,resp)=>
{
    var data = await dbconnect();
    var data1= await data.find().toArray();
    console.log(data1)
    resp.send(data1)
});


//Insert Data into mongodb
app.post('/AddData',async (req,resp)=>{
    var data = await dbconnect();

    var result = await data.insertOne(req.body)
    resp.send(result)
})



//Update Data into mongodb
app.put('/UpdateData/:name',async (req,resp)=>{
    var data = await dbconnect();
    console.log(req.params.name)
    var result = await data.updateOne({name:req.params.name},{$set:req.body})
    resp.send(result)
})

//Dekete Data from mongodb
app.delete('/DeleteData/:id',async (req,resp)=>{
    var data = await dbconnect();
    console.log(req.params.id)
    var result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})


app.listen(5000,()=>{
    console.log("server running on 5000 port")
})