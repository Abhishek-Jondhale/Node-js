const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Application').then(data =>{
    console.log("Data base successfully connected.");
}
);

const BankSchema = mongoose.Schema({
    id :{
        type : String ,
        required : true ,
        unique : true,
    },
    AccountNumber: {
        type: Number,
        required: true
    },
    IAFC: {
        type: Number,
        required: true
    },
    Branch: {
        type: String,
    },
    MobileNo: {
        type: Number,
        required: true
    }
},
    { strict: false, timestamps: true }
)

BankSchema.plugin(require("mongoose-autopopulate"));

const BankModel = mongoose.model('bankdetails', BankSchema);
module.exports = BankModel;

