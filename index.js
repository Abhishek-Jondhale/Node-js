

const express =require('express');
const bodyParser =require('body-parser');
const AuthRoute =require('./route/crud.route');
const app = express();
const PORT =3000;

app.use (bodyParser.json());
function healthcheck(req,res)
{
    res.status(200).json({
    Message:'server is running',
    status:'success',
    code:200
    });
}

app.get('/healthcheck',healthcheck);
app.use('/check',AuthRoute);

app.listen(PORT,()=>
{
    console.log(' API is running',PORT);
})