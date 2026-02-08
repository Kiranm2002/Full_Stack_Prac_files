const express = require("express");
const mongoose = require("mongoose");
const app = express()

let con_url="mongodb://localhost:27017/student";

mongoose.connect(con_url).then(()=>{console.log('connected')})

let stu = mongoose.model("stu",{},"profile");
// stu.find({}).then((users)=>{console.log(users)})

app.get("/",(req,res)=>{
    stu.find({_class:"12th std"}).then((users)=>{res.json(users)})
})

app.listen(3000)