const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const CitizenSchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    CitizenId: {
        type: Number,
        required: true
    },
    CitizenName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    applicationId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "application",
        required : true,
        autopopulate : true
    }
},
{ strict: false, timestamps: true }
)

CitizenSchema.plugin(require("mongoose-autopopulate"));

const CitizenModel = mongoose.model('citizen' , CitizenSchema);
module.exports =  CitizenModel ;

