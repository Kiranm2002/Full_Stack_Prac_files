let express=require('express')
let router=express.Router();

router.get('/home',(req,res)=>{
    res.send('Welcome to Admin Home page');
    
})

router.get('/about',(req,res)=>{
    res.send('Welcome to Admin about page');
    
})

router.get('/profile',(req,res)=>{
    res.send('Welcome to Admin  profile page');
    
})

module.exports=router;