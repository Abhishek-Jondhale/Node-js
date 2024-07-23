const CastCategory = require('../schema/CastCategarySchema');

const service = {
    save : async (NewData)=>{
        return await CastCategory.create(NewData);
    },

    getAllData : async ()=>{
        return await CastCategory.find({});
    },

    getDataById : async (DataId)=>{
        return await CastCategory.findOne({DataId : DataId});
    },

    update : async (DataId , newData)=>{
        const updatedCitizen = await CastCategory.findOneAndUpdate({DataId : DataId} , 
            newData,
            {upsert : true , new : true}
            );
        return updatedCitizen ;
    },

    delete : async (DataId)=>{
        return await CastCategory.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;