const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const DocumentsSchema = mongoose.Schema({
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
    documents : ["LC","result"],
},
{ strict: false, timestamps: true }
)

DocumentsSchema.plugin(require("mongoose-autopopulate"));

const DocumentsModel = mongoose.model('documents' , DocumentsSchema);
module.exports =  DocumentsModel ;

