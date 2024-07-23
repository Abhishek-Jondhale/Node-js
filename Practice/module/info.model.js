const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data', {
 
});


const infoSchema = new mongoose.Schema({
 
  // name: String,
  // age: Number,


},
{strict:false});


module.exports =mongoose.model('info',infoSchema)
