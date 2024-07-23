const express = require("express");
const infoRoute = express.Router();
const infoService = require('../service/info.service');


infoRoute.get("/", (req, res) => {
  const status = {
    "Status": "Running"
  };

  res.status(200).json(status);
});

infoRoute.post('/add',async  (req, res) => {
  
const  data= await infoService.save(req.body);
console.log(req.body);


if (data){
    res.status(200).json({
        data:data,
        message:'fetch successfully'
    })
}else{
    res.status(500).json({
        data:data,
        message:'no found any data '
    })   
}
  
});

infoRoute.put('/update/:id',async  (req, res,id) => {
  
  const  data= await infoService.put(req.body);
  console.log(req.body);
  
  if (data){
      res.status(200).json({
          data:data,
          message:'update  successfully'
      })
  }else{
      res.status(500).json({
          data:data,
          message:'internal server error'
      })  
            
  }

  //find by id

  router.get("/find/:id", async (req, res) => {
    console.log("Routes", req.params.id);
    try {
      const result = await appService.findByid(req.params.id);
      if (!result) {
       
        res.status(404).send({
          success: false,
          message: "Document not found",
        });
      } else {
        res.send({
          status: 200,
          data: result,
          success: true,
          message: "Document retrieved successfully",
        });
      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  });
  
  //find by name
  router.get("/find", (req, res) => {
    appService.findByName(req.query.name)
      .then((data) => {
        res.status(200).send({
          status: 200,
          success: true,
          data: data,
          message: "app fetched successfully",
        });
      })
      .catch((err) => {
        res.status(500).send({
          status: 500,
          success: false,
          data: null,
          message: "Internal server error",
        });
      });
  });
    
  app.get('/findname', async (req, resp) => {

    try {

        const result = await appService.findByName(req.params.name);

        resp.send({

            status: 200,
            data: result,
            success: true,
            massage: 'find collection successfully',
        })

    } catch (err) {

        resp.send({
            data: false,
            status: 500,
            success: undefined,
            massage: err,
        })
    }


  });

module.exports = infoRoute;
