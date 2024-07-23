const Colony = require('../schema/ColonySchema');

const service = {
    save : async (NewData)=>{
        return await Colony.create(NewData);
    },

    getAllData : async ()=>{
        return await Colony.find({});
    },

    getDataById : async (DataId)=>{
        return await Colony.findOne({DataId : DataId});
    },

    update : async (DataId , NewData)=>{
        const updatedData = await Colony.findOneAndUpdate({DataId : DataId} , 
            NewData,
            {upsert : true , new : true}
            );
        return updatedData ;
    },

    delete : async (DataId)=>{
        return await Colony.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;