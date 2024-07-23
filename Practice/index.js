const express = require('express');
const bodyParser = require('body-parser');
const infoRoute = require('./route/info.route'); // Correct import path
const app = express();
const PORT = 3500;

app.use(bodyParser.json());
app.use('/info', infoRoute);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});
