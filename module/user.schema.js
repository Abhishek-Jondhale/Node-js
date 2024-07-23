



const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/Abhi');

const UserSchema = mongoose.Schema({
emp_id:Number,
name:String,
dept_id:Number,
//address: [{type:String,line1:String,line2:String,city:String,state:String,pin:Number}]

   
},{strict:false});


const User = mongoose.model("user", UserSchema); 

module.exports = User;