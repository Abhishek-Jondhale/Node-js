const userModel=require('../Schema/user.model')

const userService={

   async  postData(topic){
        return await userModel.create(topic)
    },


    async  getData(){
        return await userModel.find()
    },

    async updateData(id,topic){
            const update= await userModel.findByIdAndUpdate(id,topic, {new:true});
            return update
    },

    async  delateData(id){
          return await userModel.findByIdAndDelete(id)
    }
}

module.exports= userService