const mongose = require("mongoose");

const testSchema = new mongose.Schema({
    name:String,
    address:String
},{collection:"TestCollection001"})

module.exports = mongose.model("TestCollection001",testSchema); 