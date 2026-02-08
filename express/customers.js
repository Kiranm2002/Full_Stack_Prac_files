let express=require('express')
let router=express.Router();

router.get('/home',(req,res)=>{
    res.send('Welcome to user Home page');
    
})

router.get('/about',(req,res)=>{
    res.send('Welcome to user about page');
    
})

router.get('/profile',(req,res)=>{
    res.send('Welcome to user  profile page');
    
})

module.exports=router;