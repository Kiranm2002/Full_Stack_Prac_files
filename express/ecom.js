let express=require("express")
let app=express()
let PORT=3000


let customers=require('./customers')
let seller=require('./seller')
let admin=require('./admin')

app.use('/customers',customers)

app.use('/seller',seller)

app.use('/admin',admin)





app.listen(PORT,()=>{
    console.log(`connected to https://localhost:${PORT}`);
    
})