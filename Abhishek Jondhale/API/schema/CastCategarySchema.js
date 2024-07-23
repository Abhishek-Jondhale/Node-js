const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const CastCategorySchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    DataId :{
        type : Number ,
        required : true 
    },
    citizenName: {
        type: String,
        required: true
    },
    cast : {
        type : String ,
        required : true
    }
},
{ strict: false, timestamps: true }
)

CastCategorySchema.plugin(require("mongoose-autopopulate"));

const CastCategoryModel = mongoose.model('castCategory' , CastCategorySchema);
module.exports =  CastCategoryModel ;

