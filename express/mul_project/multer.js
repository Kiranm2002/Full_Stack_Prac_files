const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer')
const app = express();
app.use(express.json());

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

let upload = multer({storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype.startsWith('image')){
            cb(null,true)
        }
        cb(new Error('only images are allowed'),false)
    },
    limits:{fileSize:1024 * 1024}
})

mongoose.connect('mongodb://localhost:27017/practiceDB').then(()=>{console.log('db connected')})

let fileSchema = new mongoose.Schema({
    filename:String,
    filepath:String
})

let files = mongoose.model('files',fileSchema)

app.post('/files',upload.single('file'),async(req,res)=>{
    let data = new files({
        filename:req.file.filename,
        filepath:req.file.path
    })
    await data.save()
    res.json('file saved')
})


app.listen(3000,()=>{
    console.log('connected to server');
    
})