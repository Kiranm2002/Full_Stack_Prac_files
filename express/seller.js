let express=require('express')
let router=express.Router();

router.get('/home',(req,res)=>{
    res.send('Welcome to Seller Home page');
    
})

router.get('/about',(req,res)=>{
    res.send('Welcome to Seller about page');
    
})

router.get('/profile',(req,res)=>{
    res.send('Welcome to Seller  profile page');
    
})

module.exports=router;