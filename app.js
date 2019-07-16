var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var usreencodedParser = bodyParser.urlencoded({extended : false});

app.use(usreencodedParser);

app.listen(5000);

app.get('/',(req,res)=>{
    res.send('Hello world fulcrum 1234');
})


app.get('/aboutus',(req,res)=>{
    res.send('Aboutus');
})

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/postUser',(req,res)=>{
    res.send(JSON.stringify(req.body));
})

app.get('/getUser',(req,res)=>{
    let data ={
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }

    res.send(JSON.stringify(data));
})

console.log('server is listining in 5000');