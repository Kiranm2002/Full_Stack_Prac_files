let express = require('express');
let mongoose = require("mongoose");
let app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/student").then(()=>console.log('connected to db'))

const item = mongoose.model('item',{},'profile')

app.get('/',(req,res)=>{
    item.find().then((results)=>res.json(results))
})

app.get('/:name',(req,res)=>{
    let u_name = req.params.name;
    item.find({_class:u_name}).then((results)=>res.json(results))
})



app.listen(3000,()=>console.log('connected to server'));


