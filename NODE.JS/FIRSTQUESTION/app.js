var express=require('express');
var bodyParser=require('body-parser');


var host="localhost";
var port="3000";

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next()
})

app.get('/hello',function(req,res){
    
    res.send(' Hello World!')
    console.log('Hello World!');

    
    
})

app.post('/hello',function(req,res){
    const name=req.query.name;
    res.end("Hello, "+name+"!");
    console.log("Hello, "+name+"!")
})

app.put('/hello/:id',function(req,res){
    res.send("PUT request called");
})

app.delete('/hello/:id',function(req,res){
    res.send("Deleted the record");
})


app.listen(port,host,()=>{
 console.log(`Server is running on http://${host}:${port}`)
})

