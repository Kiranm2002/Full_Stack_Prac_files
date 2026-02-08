const express=require('express')
const app = express();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" }
];

app.get('/users',(req,res)=>{
    let page = req.query.page || 1;
    let limit = req.query.limit || 2;

    let SI = (page - 1)*limit;
    let EI = page*limit;

    let pd = users.slice(SI,EI);
    res.json({page:page,limit:limit,totalUsers:users.length,pd:pd})
})




app.listen(3000,()=>{
    console.log('connected to server');
    
})