const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const JWT_Sk = "my_sc_key"; //use in .env in real project

// Fake user (no database)
const user = {
  id: 1,
  username: "john",
  password: "1234"
};

//  LOGIN ROUTE && Generates JWT

app.post('/login',(req,res)=>{
    const {username,password} = req.body;

    if(username !== user.username || password !== user.password){
        return res.status(401).json({message:"invalid credentials"});
    }

    const payload = {
        id:user.id,
        username:user.username
    };

    const token = jwt.sign(payload,JWT_Sk,{expiresIn:'1h'});  //token generator

    res.json({messgae:"Login succesful",token})

})

//  AUTH MIDDLEWARE && Verifies JWT
function authToken(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token,JWT_Sk,(err,decoded)=>{
    if(err){
        return res.status(403).json({message:"invalid token"})
    }
    req.user = decoded
    next();
  })
}

// PROTECTED ROUTE

app.get("/profile", authToken, (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user
  });
});



app.listen(3000,()=>{
   console.log(' server starte')
})