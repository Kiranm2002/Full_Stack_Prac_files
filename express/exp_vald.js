const express = require('express');
const {body, validationResult} = require('express-validator');
const app = express();
app.use(express.json())

app.post('/',[body("email").isEmail(),body("password").isLength({min:6})],(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json({error:error.array()})
    }
    res.send('valid data')
})





app.listen(3000,()=>{console.log('server started')})