var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var User = require('./User');


mongoose.connect("mongodb://localhost:27017/demoDb");

var app = express();

var usreencodedParser = bodyParser.urlencoded({extended : false});

app.use(usreencodedParser);
app.use(bodyParser.json());

app.listen(5000);

app.get('/',(req,res)=>{
    res.send('Hello world fulcrum 1234');
})

app.get('/getUser',(req,res)=>{
    User.find({},(err,docs)=>{
        if(err){ console.log('err',err)};
        res.status(200).json(docs);
    })
})

app.get('/getUserById/:Id',(req,res)=>{
    console.log('Id',req.params.Id);
    User.find({'empId':req.params.Id},(err,docs)=>{
        if(err) { console.log('err',err)}
        res.status(200).json(docs);
    })
})

app.put('/updateUser',(req,res)=>{
    let query = {
        'empId':req.body.empId
    }

    User.findOneAndUpdate(query,req.body,{upsert:false},(err,docs)=>{
        if(err){ console.log('err',err)}
        res.status(200).json(docs);
    })
})

app.delete('/deleteUser/:Id',(req,res)=>{
    User.findOneAndDelete(req.params.Id,(err,docs)=>{
        if(err){ console.log('err',err)}
        res.status(200).json('message','successfully delete')
    })
})

app.post('/postUser',(req,res)=>{
    console.log('body',req.body);
    let user = new User(req.body);
    user.save((err,docs)=>{
        if(err){ console.log('err',err)};
        res.status(200).json({'message':'successfully save',data:docs})
    })
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