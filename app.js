
const express = require('express');

const bodyParser = require('body-parser');
const config = require('./config/config');
const customerRouter = require('./route/customer');
const PORT  =3000;

const app = express();





app.use(bodyParser.json());
app.use('/customers', customerRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port`);
});
