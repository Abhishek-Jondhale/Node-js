const BankDetailsSchema = require('../schema/BankAccountSchema');

const service = {
    save : async (newBankDetails)=>{
        return await BankDetailsSchema.create(newBankDetails);
    },

    getAllBankDetails : async ()=>{
        return await BankDetailsSchema.find({});
    },

    getBankDetailsByNumber : async (AccountNumber)=>{
        return await BankDetailsSchema.findOne({AccountNumber : AccountNumber});
    },

    update : async (AccountNumber , newBankDetails)=>{
        const updatedBankDetails = await BankDetailsSchema.findOneAndUpdate({AccountNumber : AccountNumber} , 
            newBankDetails,
            {upsert : true , new : true}
            );
        return updatedBankDetails ;
    },

    delete : async (AccountNumber)=>{
        return await BankDetailsSchema.findOneAndDelete({AccountNumber : AccountNumber});
    }
}


module.exports = service ;