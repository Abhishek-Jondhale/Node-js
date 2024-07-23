const Certificate = require('../schema/CertificateSchema');

const service = {
    save : async (NewData)=>{
        return await Certificate.create(NewData);
    },

    getAllData : async ()=>{
        return await Certificate.find({});
    },

    getDataById : async (DataId)=>{
        return await Certificate.findOne({DataId : DataId});
    },

    update : async (DataId , NewData)=>{
        const updatedData = await Certificate.findOneAndUpdate({DataId : DataId} , 
            NewData,
            {upsert : true , new : true}
            );
        return updatedData ;
    },

    delete : async (DataId)=>{
        return await Certificate.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;