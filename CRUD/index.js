const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./route/apiRoute');
const userRoute= require('./route/user.route')
const cartRoute=require('./route/cartRoute')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json())


app.use('/api', apiRoute);
app.use('/user',userRoute)
app.use('/cart',cartRoute)

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
