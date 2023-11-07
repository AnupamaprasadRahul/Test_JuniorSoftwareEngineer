const express=require('express');
const mongoose = require('mongoose');
const routes=require('./Routes/index');
const bodyParser= require('body-parser');
const cors =require('cors');
const app=express();


const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/',routes);

const port=5500;
const hostname='localhost';
const atlasDBUrl='mongodb+srv://anupamaprasad14:ctCxI5WvpCwELPVc@cluster0.jpsqzfz.mongodb.net/imagegallery?retryWrites=true&w=majority'

mongoose.connect(atlasDBUrl,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(res =>{
        app.listen(port, hostname,()=>{

            console.log(`Server is running at ${hostname}:${port}`);
        });

   })
    .catch(err =>console.log(err));