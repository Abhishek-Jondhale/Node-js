const certificateDashboard = require('../schema/CertificateDashboardSchema');

const service = {
    save: async (NewData) => {
        return await certificateDashboard.create(NewData);
    },

    getAllData: async () => {
        return await certificateDashboard.find({});
    },

    getDataById: async (DataId) => {
        return await certificateDashboard.findOne({ DataId: DataId });
    },

    update: async (DataId, newData) => {
        const updatedData = await certificateDashboard.findOneAndUpdate({ DataId : DataId },
            newData,
            { upsert: true, new: true }
        );
        return updatedData;
    },

    delete: async (DataId) => {
        return await certificateDashboard.findOneAndDelete({ DataId: DataId });
    }
}


module.exports = service;