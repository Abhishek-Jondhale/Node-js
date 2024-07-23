const cartModel=require('../Schema/cart.model')

const cartService={
    async postData(topic){
        return await cartModel.create(topic)
    },


    async getData(){
        return await cartModel.find()
    },


    async updateData(topic,id){
        return await cartModel.findByIdAndUpdate(id,topic, {new: true});
        return update 
    },

    async deleteData (id){
        return await cartModel.findByIdAndUpdate(id);
       
    }

}
module.exports=cartService