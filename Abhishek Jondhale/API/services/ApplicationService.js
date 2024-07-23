const ApplicationSchema = require('../schema/ApplicationSchema');

const service = {
    save: async (newApplication) => {
        return await ApplicationSchema.create(newApplication);
    },

    getAllapplication: async () => {
        return await ApplicationSchema.find({});
    },

    getApplicationById: async (ApplicationId) => {
        return await ApplicationSchema.findOne({ ApplicationId: ApplicationId });
    },

    update: async (ApplicationId, newApplication) => {
        const UpdatedApplication = await ApplicationSchema.findOneAndUpdate({ ApplicationId: ApplicationId},
            newApplication,
            { upsert: true, new: true });
        return UpdatedApplication;
    },

    delete: async (ApplicationId) => {
        return await ApplicationSchema.findOneAndDelete({ ApplicationId : ApplicationId });
    }
}


module.exports = service;