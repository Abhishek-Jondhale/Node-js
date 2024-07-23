const express=require('express');
const router=express.Router();
const cartService=require('../service/cartService');


router.post('/post',async(req,res)=>{
    const data=await cartService.postData(req.body);
    res.json({
        data:data
    })

})

router.get('/get',async(req,res)=>{
    const data= await cartService.getData();
    res.json({
        data:data
    })
})

router.delete('/delete/:id',async(req,res)=>{
    const data=await cartService.updateData(req.query.body)
    res.send({
        data:data
    })
})

router.put("/update/:id", async (req,res)=>{
    const data=await cartService.deleteData(req.params.id,req.body);
    res.send({
        data:data

    })
});
module.exports=router