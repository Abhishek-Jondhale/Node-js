

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Node');
const apiSchema=mongoose.Schema({


    

},{strict:false});
const API=mongoose.model("API",apiSchema);
module.exports=API;

