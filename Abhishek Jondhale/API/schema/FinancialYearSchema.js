const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application');

const FinanceSchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    citizenName: {
        type: String,
        required: true
    },
    FinancialStatement : {
        type : String ,
        required : true 
    },
},
{ strict: false, timestamps: true }
)

FinanceSchema.plugin(require("mongoose-autopopulate"));

const FinanceModel = mongoose.model('finance' , FinanceSchema);
module.exports =  FinanceModel ;

