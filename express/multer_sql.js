const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const app = express();
app.use(express.json())

let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kiran2002",
    database:"test2"
})
db.connect(err=>{
    if(err){
        console.log(err);
        
    }
    console.log('db connected')
})


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})

const upload = multer({storage});

app.post('/upload',upload.single('file'),(req,res)=>{
    const {filename,path} = req.file

    const query = "Insert into files (filename,filepath) values (?,?)";
    db.query(query,[filename,path],(err,result)=>{
        if(err){
            return res.send(err)
        }
        res.send("file uploaded and saved to sql")
    })
    
})



app.listen(3000,()=>{
    console.log('server started');
    
})