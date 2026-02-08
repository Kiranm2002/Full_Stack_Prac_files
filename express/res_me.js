const express=require('express')
const app=express()

app.get('/download',(req,res)=>{
    const filePath='example.txt'
    res.download(filePath)
})

app.listen(3000,()=>{
    console.log('server...');
    
})