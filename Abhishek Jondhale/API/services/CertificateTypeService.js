const CertificateType = require('../schema/CertificateTypeSchema');

const service = {
    save : async (NewData)=>{
        return await CertificateType.create(NewData);
    },

    getAllData : async ()=>{
        return await CertificateType.find({});
    },

    getDataById : async (DataId)=>{
        return await CertificateType.findOne({DataId : DataId});
    },

    update : async (DataId , NewData)=>{
        const updatedData = await CertificateType.findOneAndUpdate({DataId : DataId} , 
            NewData,
            {upsert : true , new : true}
            );
        return updatedData ;
    },

    delete : async (DataId)=>{
        return await CertificateType.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;