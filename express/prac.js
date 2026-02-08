const express = require('express');
// const jwt = require('jsonwebtoken');
const path = require('path')
const app = express();
app.use('/files',express.static(path.join(__dirname,"Public")));

app.get('/',(req,res)=>{
    res.sendFile((path.join(__dirname,"Public","index.html")))
})

app.listen(3000,()=>{
   console.log(' server starte')
})