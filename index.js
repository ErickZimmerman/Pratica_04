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
    

})

app.put("/", function(req, res){
    res.status(200).end()
    res.json ({status:"201", message:"Você fez uma requisição PUT"});
});


app.post("/", function(req, res){
    console.log(req.body);
    res.json ({status:"201", message:"Você fez uma requisição GET"})
})


module.exports = app


