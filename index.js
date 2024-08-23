// const dbConnect = require('./mongoDBDatabase');


// async function testFun(){
//  // Get the collection
//  const collection = await dbConnect();

//  // Insert data
//  const insertResult = await collection.deleteOne(
//         { name:"nilesh maurya 001"}
//     );

//  console.log('Data inserted:', insertResult);
// }

// testFun();

// const expresss = require("express");

// require('./config');
// const product = require('./Testcollection001_schema_Model');

// const app = expresss();
// app.use(expresss.json())

// //insert data
// app.post('/create', async (req,resp)=>{
//     var data = new product(req.body);
//     let result = await data.save();
//     resp.send(result)
// })

// //Get data
// app.get('/Get', async (req,resp)=>{
//     var data = await product.find();
//     resp.send(data)
// })


// //Delete data
// app.delete('/delete/:_id', async (req,resp)=>{
//     var data = await product.deleteOne(req.params);
//     console.log(req.params)
//     resp.send(data)
// })




// //Update data
// app.put('/update/:name', async (req,resp)=>{
//     var data = await product.updateOne(req.params,{$set:req.body});
//     resp.send(data)
// })


// //Search Data
// app.get('/Search/:key', async (req,resp)=>{
//     var data = await product.find({
//         "$or":[
//             {"name":{$regex:req.params.key}}
//         ]
//     });
//     console.log(req.params.key)
//     resp.send(data)
// })


// app.listen(7000);



// const mysql = require("mysql");

// console.log("Starting MySQL connection...");  // Debug statement

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "ni99le74",
//     database: "dbtest",
//     port: 3306
// });

// con.connect((err) => {
//     console.log("Attempting to connect...");  // Debug statement
//     if (err) {
//         console.error("Connection error:");
//         console.error("Code:", err.code);
//         console.error("Message:", err.message);
//         console.error("SQL State:", err.sqlState);
//         console.error("Stack:", err.stack);
//         return;
//     }
//     console.log("Connected successfully");
// });

// con.query("Select * from dbtest.tbltest",(err,result)=>{
//     console.warn("hello",result)
// })
