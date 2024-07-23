const mongoose=require('mongoose');
require('../config')
const cartModel=mongoose.Schema({
    name:{
        type:String,
    }

},
{strict:false});
module.exports=mongoose.model('cart',cartModel);


