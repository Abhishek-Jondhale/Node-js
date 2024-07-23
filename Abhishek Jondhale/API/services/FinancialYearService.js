const Finance = require('../schema/FinancialYearSchema');

const service = {
    save : async (NewData)=>{
        return await Finance.create(NewData);
    },

    getAllData : async ()=>{
        return await Finance.find({});
    },

    getDataById : async (DataId)=>{
        return await Finance.findOne({DataId : DataId});
    },

    update : async (DataId , NewData)=>{
        const updatedData = await Finance.findOneAndUpdate({DataId : DataId} , 
            NewData,
            {upsert : true , new : true}
            );
        return updatedData ;
    },

    delete : async (DataId)=>{
        return await Finance.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;