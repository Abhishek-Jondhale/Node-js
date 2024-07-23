const CitizenSchema = require('../schema/CitizenSchema');

const service = {
    save : async (newCitizen)=>{
        return await CitizenSchema.create(newCitizen);
    },

    getAllCitizen : async ()=>{
        return await CitizenSchema.find({});
    },

    getCitizenById : async (CitizenId)=>{
        return await CitizenSchema.findOne({CitizenId : CitizenId});
    },

    update : async (CitizenId , newCitizen)=>{
        const updatedCitizen = await CitizenSchema.findOneAndUpdate({CitizenId : CitizenId} , 
            newCitizen,
            {upsert : true , new : true}
            );
        return updatedCitizen ;
    },

    delete : async (CitizenId)=>{
        return await CitizenSchema.findOneAndDelete({CitizenId : CitizenId});
    }
}


module.exports = service ;