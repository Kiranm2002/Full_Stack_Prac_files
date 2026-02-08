// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("hello"),3000)
// })
// // p1.then((res)=>console.log(res))  //syntax of promises
// // .catch((err)=>console.log(err))

const { log } = require("node:console")

// const { log } = require("console");

// async function exe(){
//     let res= await p1
//     console.log(res);
    
// }
// exe().catch(err=>console.log(err))

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(()=>{
//     console.log("hello");
    
// },2000)
// console.log("four");
// console.log("five");

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200)
            
//         },3000)
//     })
// }
//  async function getData(){
//     await api()
//     await api()
//  }
// getData()

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
            
//         },3000)
//     })
    
// }
// (async function getall(){
//     await getData(1)
//     await getData(2)
// })()


// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 2000);
//     })
// }


// getData().then((res)=>{
//     console.log("First:",res);
//     return res*2
    
// }).then((res)=>{
//     console.log("Sec:",res);
//     return res*3
    
// }).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// async function showData(){
//     try{
//         let res=await getData()
//         console.log(res);

//         res *= 2
//         console.log(res);
        
//     }catch(err){
//         console.log(err);
        
//     }
// }
// showData()

// function checkAge(age) {
//   if (age < 18) {
//     throw new Error("Age must be 18+");
//   }
//   return "Allowed";
// }

// try {
//   checkAge(19);
// } catch (e) {
//   console.log(e.message);
// }
// console.log(checkAge(19));

// function getData(val,delay){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       rej(val)
//     },delay)
//   })
// }
// async function showdata() {
//   try{
//     let result=await getData(10,1000)
//    console.log(result);
//   }catch(err){
//     console.log(err);
    
//   }
  
  
// }
// showdata()

function getData(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      rej('Data recived')
    },2000)
  })
}
async function showdata() {
  try{
      let result = await getData()
      console.log(result);
  }catch(err){
      console.log(err);
      
  }
  
  
}
showdata()

