const express= require('express');
const router=express.Router();
const userService=require('../service/user.service')

router.post('/postdata',async(req,res)=>{
    const data= await userService.postData(req.body);
    res.json({
        data:data
    })
})

router.get('/getdata',async(req,res)=>{
    const data= await userService.getData();
    res.json({
        data:data
    })
})

router.delete('/deletedata/:id',async(req,res)=>{
    const data= await userService.delateData(req.params.id);
    res.json({
        data:data
    })
})

router.put('/updatedata/:id',async(req,res)=>{
    const data= await userService.updateData(req.params.id,req.body);
    res.json({
        data:data
    })
})

module.exports=router