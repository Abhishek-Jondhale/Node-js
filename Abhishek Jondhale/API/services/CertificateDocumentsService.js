
const certificateDocs = require('../schema/CertificateDocumentsSchema');

const service = {
    save : async (NewData)=>{
        return await certificateDocs.create(NewData);
    },

    getAllData : async ()=>{
        return await certificateDocs.find({});
    },

    getDataById : async (DataId)=>{
        return await certificateDocs.findOne({DataId : DataId});
    },

    update : async (DataId , newData)=>{
        const updatedData = await certificateDocs.findOneAndUpdate({DataId : DataId} , 
            newData,
            {upsert : true , new : true}
            );
        return updatedData ;
    },

    delete : async (DataId)=>{
        return await certificateDocs.findOneAndDelete({DataId : DataId});
    }
}


module.exports = service ;