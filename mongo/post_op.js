let express = require("express");
let mongoose = require("mongoose");
let app = express();
app.use(express.json())

// let con_url = "mongodb://localhost:27017/student";
mongoose.connect("mongodb://localhost:27017/student").then((res)=>{
    console.log("db connected");
    
}).catch((err)=>{console.log("db failed")})

let userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
});

let User = mongoose.model("User",userSchema)

// app.get("/",(req,res)=>{
//     res.send('Express + mongo')
// })

app.post("/users",async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
});

app.get("/users",async(req,res)=>{
    let users = await User.find()
    res.json(users)
})


app.listen(3000,()=>{
    console.log("server connected");
    
})