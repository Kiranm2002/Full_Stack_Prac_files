const express = require('express');
const app = express();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" }
];

app.get('/users',(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const startIndex = (page-1)*limit;
    const endIndex = page*limit;

    let pu = users.slice(startIndex,endIndex);

    res.json({
        page,limit,totalUsers:users.length,data:pu
    })
})









app.listen(3000,()=>{
    console.log('server started');
    
})