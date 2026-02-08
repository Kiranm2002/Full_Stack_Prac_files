// let pro=new Promise((resolve,rej)=>{
//     console.log("Promise");
//     // resolve("success")
//     rej("some error occ")

// const { log } = require("console")

    
// })


// function getData(dataId,getNxt){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
//             if(getNxt){
//             getNxt()
//             }
//         },5000)
//     })
    
// }

// let getPromise = ()=>{
//     return new Promise((resolved,reject)=>{
//         console.log("I am promise");
//         resolved("Success")
//         // reject("error")
        
//     })
// }

// let pro=getPromise()
// pro.then((res)=>{
//     console.log("Completed",res);
    
// })
// pro.catch((err)=>{
//     console.log('rejected',err);
    
// })

// let asynFun1=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("Success")
            
//         },4000)
//     })
// }
// let asynFun2=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("Success")
            
//         },4000)
//     })
// }

// console.log("Data 1 fetching..");
// let p1=asynFun1()
// p1.then((res)=>{
//     console.log(res);
//     console.log("Data 2 fetching..");
//     let p2=asynFun2()
//     p2.then((res)=>{
//         console.log(res);
    
//     })
    
// })
// console.log("Data 1 fetching..");
// asynFun1().then((res)=>{
//     console.log(res);
//     console.log("Data 2 fetching..");
//     asynFun2().then((res)=>{
//         console.log(res);
    
//     })
    
// })



//  function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
            
//         },3000)
//     })
    
// }
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
        
//     })
    
// })
// console.log("getting data 1..");
// getData(1).then((res)=>{
//     console.log("getting data 2..");
    
//     return getData(2)
// }).then((res)=>{
//     console.log("getting data 3..");
//     return getData(3)
    
// }).then((res)=>{
//     console.log(res);
    
// })




// let pro= new Promise((res,rej)=>{
//     let suc=false;

//     if(suc){
//         res("Success");
        
//     }else{
//         rej("rejected");
        
//     }


// })
// pro.then((res)=>console.log(res)).catch((err)=>{console.log(err)}).finally(()=>{console.log('Done')})

// let p1= Promise.resolve("Success")
// p1.then(res=>console.log(res))

// let p2=Promise.reject("error")
// p2.catch(err=>console.log(err))

// let p3= Promise.resolve('success 1')
// let p4= Promise.resolve('success 2')

// let p6=Promise.reject("error")

// Promise.allSettled([p3,p4,p6]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// let p5=new Promise(resolve=>setTimeout(()=>resolve("first"),2000))
// let p6=new Promise(resolve=>setTimeout(()=>resolve("second"),1000))

// let p5=Promise.reject("error")
// let p6=Promise.reject("success")
// // let p7=Promise.reject("error2")
// // let p8=Promise.resolve("success 2")
// Promise.any([p5,p6]).then(res=>console.log(res)).catch((err)=>console.log(err))

// let p1=new Promise((resolve,rej)=>{
//     resolve(10)
// })
// p1.then((res)=>{
//     console.log("Step1:",res)
//     return res*2
// }).then((res)=>{
//     console.log("Step2:",res)
//     return res*3
// }).then((res)=>{
//     console.log("Step3:",res)
    
// }).catch((err)=>{console.log(err)})

// function as(val,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(val)

//         },delay)        

//     })
// }
// as(5,1000).then((res)=>{
//     console.log("First:",res);
//     return as(res+5,2000)
    
// }).then((res)=>{
//     console.log("Second:",res);
//     return as(res*2,3000)
    
// }).then((res)=>{
//     console.log("Third:",res);
  
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// let p1=new Promise((res,rej)=>{
//     return rej("success")
// })
// p1.then((res)=>{console.log(res)})

// function pro(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(10)
//         },1000)
//     })
// }
// pro().then(res=>{
//     console.log(res)
//     return res * 2
// }).then(res=>{
//     console.log(res);
    
// })

// async function pro1() {
//     let rs=await pro()
//     console.log(rs)
// }
// pro1()

// let p1= Promise.reject("success 1")
// let p2= Promise.resolve("success")
// let p3= Promise.reject("rejected")
// let p4= Promise.resolve("success")

// let out=Promise.any([p1,p2,p3,p4]).then(res=>{console.log(res)}).catch((resa)=>{console.log(resa)})
// console.log(out)


// let p= new Promise((resolve,reject)=>{
//     resolve(10)
// })
// p.then(res=>{
//     console.log(res);
//     return res * 2
    
// }).then((res)=>{
//     console.log(res);
//     return res*3
// }).then((res)=>{
//     console.log(res);
    
// }).catch((val)=>{
//     console.log(val);
    
// })

// function ast(val,delay){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(val)
//         },delay)
//     })
// }

// ast(5,1000).then((res)=>{
//     console.log('first:',res);
//     return ast(res+5,1000)
    
// }).then((res)=>{
//     console.log('second:',res);
    
// })
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18+");
  }
  return "Access granted";
}

try {
  checkAge(16);
} catch (e) {
  console.log(e.message);
}
