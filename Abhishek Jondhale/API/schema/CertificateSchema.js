const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const DashBoardSchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    citizenName: {
        type: String,
        required: true
    },
    certificate : {
        type : String ,
        required : true 
    },
},
{ strict: false, timestamps: true }
)

DashBoardSchema.plugin(require("mongoose-autopopulate"));

const DashboardModel = mongoose.model('certificate' , DashBoardSchema);
module.exports =  DashboardModel ;

