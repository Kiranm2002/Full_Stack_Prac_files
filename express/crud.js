const express=require('express');
const app=express();
let bodyPar = require('body-parser')
app.use(bodyPar.json())
app.use(express.json())

let user_data=[
    {id:1, name: 'Kiran', email: "kiran@gmail.com"},
    {id:2, name: 'Rohan', email: "Rohan@gmail.com"},
]
let incId =3;

// app.get('/users',(req,res)=>{
//     res.json(user_data)
// })

app.get('/users/:id',(req,res)=>{
    let user_id=req.params.id;
    let fil_ud=user_data.find(user => user.id == user_id)
    if(fil_ud){
        res.json(fil_ud)
    }else{
        res.json({mesaage:'invalid ID'})
    }
    
})

app.post('/users',(req,res)=>{
    // let user_id=req.params.id;
    let inp_name = req.body.name;
    let inp_email = req.body.email;
    let new_data={id:incId++, name:inp_name, email:inp_email};
    user_data.push(new_data);
    res.json(user_data);
})

app.put('/users/:id',(req,res)=>{
    let user_id=req.params.id;
    let inp_name = req.body.name;
    let inp_email = req.body.email;
    // console.log(user_id,inp_email,inp_name)

    let fil_ud=user_data.findIndex(user => user.id == user_id);
    if(fil_ud == -1){
        res.json({message:'invalid message'})
    }else{
        
        user_data[fil_ud] = {id:user_id, name:inp_name, email:inp_email};
        res.json(user_data)
    }
})

app.patch('/users/:id',(req,res)=>{
    let user_id=req.params.id;
    let inp=req.body;
    let fil_ud=user_data.findIndex(user => user.id == user_id);
    if(fil_ud == -1){
        res.json({message:'invalid id'})
    }else{
        Object.keys(inp).forEach(key=>{
            if(key in user_data[fil_ud]){
                user_data[fil_ud][key]=inp[key]
            }
        })
        res.json(user_data)
    }
})

app.delete('/users/:id',(req,res)=>{
    let user_id = req.params.id;
    user_data=user_data.filter(user => user.id != user_id);
    res.json(user_data)
})




app.listen(3000,()=>{
    console.log('connected');
    
})