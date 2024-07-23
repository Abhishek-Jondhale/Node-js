const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const ApplicationTypeSchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    ApplicationName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
    },
    ApplicationType :{
        type : String ,
        required : true
    }
},
{ strict: false, timestamps: true }
)

ApplicationTypeSchema.plugin(require("mongoose-autopopulate"));

const ApplicationModel = mongoose.model('application-type' , ApplicationTypeSchema);
module.exports = ApplicationModel ;

