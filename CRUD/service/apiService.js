const apiSchema = require('../Schema/schema');

const apiService = {
    save: async (newApi) => {
        try {
            const createdApi = new apiSchema(newApi);
            const savedApi = await createdApi.save();
            return savedApi;
        } catch (error) {
            throw error;
        }
    },
    
    update: async (id, updatedData) => {
        try {
    
            const updatedApi = await apiSchema.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedApi) {
                throw new Error('API not found');
            }
            return updatedApi;
        } catch (error) {
            throw error;
        }
    },
    
    delete: async (id) => {
        try {
            // Find the API data by ID and delete it
            const deletedApi = await apiSchema.findByIdAndDelete(id);
            if (!deletedApi) {
                throw new Error('API not found');
            }
            return deletedApi;
        } catch (error) {
            throw error;
        }
    },
    
    
        getAllData: async () => {
            try {
                // Retrieve all data from the database using the appropriate method
                const allData = await apiSchema.find();
                return allData;
            } catch (error) {
                throw error;
            }
        },
    
    getById: async (id) => {
        try {
            // Retrieve API data by ID
            const apiById = await apiSchema.findById(id);
            if (!apiById) {
                throw new Error('API not found');
            }
            return apiById;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = apiService;
