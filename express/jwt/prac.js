const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const JWT_Secret = "my_secret_key"
const user = {
  id: 1,
  username: "john",
  password: "1234"
};

app.post('/login',(req,res)=>{
    const {username,password} = req.body;

    if(username !== user.username || password !== user.password){
        return res.status(401).json({message:"invalid credentials"})
    }

    let payload = {
        id:user.id,
        username:user.username
    }

    jwt.sign(payload,JWT_Secret,{expiresIn:"1h"},(err,token)=>{
        if(err) return err
        res.send(token)
        
    })

})

function authMid(req,res,next){
    const authHead = req.headers.authorization;
    const token  = authHead && authHead.split(" ")[1];
    if(!token){
        return res.json({message:"token missing"})
    }
    jwt.verify(token,JWT_Secret,(err,results)=>{
        if(err) return err
        req.user = results
        next()
    })
}

app.get('/user',authMid,(req,res)=>{
    res.send(req.user)
})
app.listen(3000,()=>{
   console.log(' server starte')
})