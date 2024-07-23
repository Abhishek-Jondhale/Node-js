const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const CertificateTypeSchema = mongoose.Schema({
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
    CertificateType : {
        type : String ,
        required : true 
    }
},
{ strict: false, timestamps: true }
)

CertificateTypeSchema.plugin(require("mongoose-autopopulate"));

const CertificateTypeModel = mongoose.model('certificate-type' , CertificateTypeSchema);
module.exports =  CertificateTypeModel ;

