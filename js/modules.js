//  const { log } = require('console')
const fs=require('fs')


 let file_name1='one1.txt'
  let file_name2='two.txt'
  let sm_con='\n\n Hello'

  //to read data from file
let read_file=(file)=>{
    fs.readFile(file,'utf8',(err,data)=>{
        if(err){
            console.error('error reading file:',err);
            return
            
        }
        console.log("file content:")
        console.log(data);
        
    })
}


// to write data to file
let write_file=(file,conTo)=>{
    fs.writeFile(file,conTo,(err)=>{
        if(err){
            console.error("Error writing to file:",err)
            return
        }
        console.log('content SWTF');
        
    })
}

//apend file to another file
let append_file=(file,conToap)=>{
    fs.appendFile(file,conToap,(err)=>{
        if(err){
            console.error('error in appending:',err);
            return;
        }
        console.log('content suc appended');
        
    })
}


//to delete a file
let del_file=(file)=>{
    fs.unlink(file,(err)=>{
        if(err){
            console.error('error del file:',err)
            return;
        }
        console.log("file delted succesfully");
        
    })
}



// read_file(file_name1)
// write_file(file_name2,sm_con)
// append_file(file_name2,sm_con)
del_file(file_name2)