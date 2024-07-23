const express = require('express');
const examRoute = express.Router();
exports.examRoute = examRoute;

const examservice = require('../service/exam.service');


examRoute.get("/", (req, res) => {
    res.send("API is working");
  });

  examRoute.get('/',(req,res)=>{
    const number=(req.body);
    
   
  

  });


  examRoute.post("/post", (req, res) => {
  examservice.save(req.body)
    .then(function (data) {
      console.log("savvev", data)
      res.status(201).send({
        status: 201,
        success: true,
        data: data,
        message: "fetched app successfully",

      });
      console.log("savvev", data)
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        success: false,
        data: null,
        message: "Internal server error",
      });
      console.log("err", err)
    });
});



examRoute.get('/calculate', (req, res) => {

    const number = parseFloat(req.query.number);

    if (!(number)) {

        return res.status(400).json({ error: 'Invalid number provided' });
    }

    if (number < 0) {

        return res.status(400).json({ error: 'Negative numbers are not allowed' });
    }


    const squareRoot = Math.sqrt(number);


    res.json({ result: squareRoot });
});



module.exports = examRoute;

