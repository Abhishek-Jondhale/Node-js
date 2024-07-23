const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const ApplicationSchema = mongoose.Schema({
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
    // Citizen : {
    //     type : mongoose.Schema.Types.ObjectId ,
    //     ref : "citizen",
    //     required : true,
    //     autopopulate : true
    // }
},
{ strict: false, timestamps: true }
)

ApplicationSchema.plugin(require("mongoose-autopopulate"));

const ApplicationModel = mongoose.model('application' , ApplicationSchema);
module.exports = ApplicationModel ;

