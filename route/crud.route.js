const express = require('express');
const AuthRoute = express.Router();
exports.AuthRoute = AuthRoute;

const Authservice = require('../service/crudservice');


AuthRoute.get("/", (req, res) => {
    res.send("API is working");
  });

  AuthRoute.get('/',(req,res)=>{
    const number=(req.body);
    
   
  

  });


  AuthRoute.post("/post", (req, res) => {
  Authservice.save(req.body)
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



AuthRoute.get('/calculate', (req, res) => {

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



module.exports = AuthRoute;

