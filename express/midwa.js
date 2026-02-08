let express = require('express')

let app=express()

//middleware 1

// let middleware1=(req,res,next)=>{
//     console.log('middleware 1');
//     next();
    
// }
// app.use(middleware1)  or

app.use((req,res,next)=>{
    console.log('middleware 1');
    next();
    
})

//middleware 2
app.use((req,res,next)=>{
    console.log('middleware 2');
    next();
    
})


//Route Handler
app.get('/',(req,res,next)=>{
    console.log('Executing handler');
    res.send('Hello world!')
    next();
    
})

//middleware 3
app.use((req,res,next)=>{
    console.log('middleware 3');
    next();
    
})


app.listen(3000,()=>{
    console.log('Server is running on 3000');
    
})