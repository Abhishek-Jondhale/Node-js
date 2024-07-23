const ApplicationTypeSchema = require('../schema/ApplicationCategorySchema');

const service = {
    save: async (newApplication) => {
        return await ApplicationTypeSchema.create(newApplication);
    },

    getAllapplication: async () => {
        return await ApplicationTypeSchema.find({});
    },

    getApplicationById: async (ApplicationId) => {
        return await ApplicationTypeSchema.findOne({ ApplicationId: ApplicationId });
    },

    update: async (ApplicationId, newApplication) => {
        const UpdatedApplication = await ApplicationTypeSchema.findOneAndUpdate({ ApplicationId: ApplicationId},
            newApplication,
            { upsert: true, new: true });
        return UpdatedApplication;
    },

    delete: async (ApplicationId) => {
        return await ApplicationTypeSchema.findOneAndDelete({ ApplicationId : ApplicationId });
    }
}


module.exports = service;