const express = require('express')

const app = express()

app.listen(3000, function(){
    console.log('API ESTA VAPO!')
})

app.use(express.json());

app.use(function(req, res, next){
    console.log("Data", new Date());
    next();
})

app.get("/", function(req, res){
    console.log(req.url);
    res.json ({status:"200", message:"Você fez uma requisição GET"})
})

app.post("/", function(req, res){
    console.log(req.url);
    res.status(201).json ({status:"201", message:"Você fez uma requisição GET"})
})

app.put("/", function(req, res){
    res.status(200).end();
    console.log(req.url);
    res.json ({status:"201", message:"Você fez uma requisição PUT"});
});

app.delete("/", function(req, res){
    console.log(req.url);
    res.status(204).json ({status:"204", message:"Você fez uma requisição DELETE"})
  
});



module.exports = app


