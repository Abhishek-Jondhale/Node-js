const mongoose= require('mongoose');
require('../config')
const userModel=mongoose.Schema({
    name:{
        type:String
    }
},
{strict:false})

module.exports=mongoose.model('user',userModel)