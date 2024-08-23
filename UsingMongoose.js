var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase001")

//schema
const productSchema= new mongoose.Schema(
    {
        name:String,
        address:String
    },
    {
        collection: "TestCollection001"
    }
);
//Insert data into DB
const saveInDB = async ()=> {
    
    // Define an array of data to insert
    let data1 = [
        { name: "nilesh001" },
        { name: "nilesh002" },
        { name: "nilesh003" },
        // Add more documents as needed
    ];

    let data2 =  { name: "nilesh001" }
    const ProductsModel =  mongoose.model("TestCollection001",productSchema);
    let data = new ProductsModel(data2);
    let result = await data.save();
    console.log(data);
}

//saveInDB()
//Updare data into DB
const updateInDB = async ()=> {    
    const ProductsModel =  mongoose.model("TestCollection001",productSchema);
    let data = await ProductsModel.updateOne({name:"Test001",address:"surat001 updated"});
   // let result = await data.save();
    console.log(data);
}

//updateInDB()

const deleteInDB = async ()=> {    
    const ProductsModel =  mongoose.model("TestCollection001",productSchema);
    let data = await ProductsModel.deleteOne({name:"6"});
   // let result = await data.save();
    console.log(data);
}

//deleteInDB();