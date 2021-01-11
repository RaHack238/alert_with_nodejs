const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render('home');
})

app.use(bodyParser.urlencoded({extended: true}));

app.post('/login', (req,res)=>{
    console.log(req.body);
    res.render("message", {data: req.body.email, message: '<script>alert("Do you wish to continue?")</script>'});
})

app.listen(5001, ()=>{
    console.log("App is listening on port 5001...");
})