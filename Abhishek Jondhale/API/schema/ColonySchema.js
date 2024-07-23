const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const ColonySchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    citizenName: {
        type: String,
        required: true
    },
    colony : {
        type : String ,
        required : true 
    },
    
},
{ strict: false, timestamps: true }
)

ColonySchema.plugin(require("mongoose-autopopulate"));

const ColonyModel = mongoose.model('colony' , ColonySchema);
module.exports =  ColonyModel ;

