let express = require('express')
let app=express()

// app.get('',(req,res)=>{
//     res.send("<h1 style='text-align:center'>welcome to Express</h1>")
// })

app.get('/home',(req,res)=>{
    res.send('welcome to Home')
})

app.get('/about',(req,res)=>{
    res.send('welcome to About')
})

// app.get('/:user',(req,res)=>{
//     res.send(`<h1 style='text-align:center'>Hi ${req.params.user}welcome to Express</h1>`)
// })

// app.get('/:user/:company',(req,res)=>{
//     res.send(`<h1 style='text-align:center'>Hi ${req.params.user}welcome to ${req.params.company}</h1>`)
// })

// app.get('/:userid(/^\d{2,3}$/)',(req,res)=>{
//     res.send(`<h1 style='text-align:center'>Hi ur userId :  ${req.params.userid}</h1>`)
// })

app.get('/:userid?',(req,res)=>{
    let user_id=req.params.userid
    if(!user_id){
        user_id=0
    }
    res.send(`<h1 style='text-align:center'>Hi ur userId :  ${user_id}</h1>`)
})




app.listen(3000,()=>{
    console.log('connected at 3000')
})