// Create a Promise that resolves after 2 seconds

/*let pro1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("success")
    },2000)
})
pro1.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})*/

// Promise chaining
// Multiply a number by 2, then add 3, then print.

/*let p1=new Promise((res,rej)=>{
    res(10)
})
p1.then((res)=>{
    console.log(res);
    return res*2
    
}).then((res)=>{
    console.log(res);
    return res+3
    
}).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})*/

// Promise.all
// Fetch two numbers and print their sum.

/*let p1=Promise.resolve(5)
let p2=Promise.resolve(10)
Promise.all([p1,p2]).then(([a,b])=>{
    console.log(a+b);
    
})*/

// Convert callback to Promise

/*function delay(ms,value,cl){
    setTimeout(()=>{
        cl(value)
    },ms)
}

function delayPro(ms,value){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(value),ms
        })
    })
}

delayPro(1000,"hello").then(console.log)*/

// Simple async function

/*async function greet() {
  return "Hello World";
}
greet().then(console.log);*/


// Error handling with async/await
/*async function fetchData() {
  try {
    const data = await Promise.reject("Failed");
  } catch (err) {
    console.log("Error:", err);
  }
}
fetchData();*/


// Sequential API calls
/*async function seq() {
    const a= await Promise.resolve(5)
    const b = await Promise.resolve(a+5)
    // return [a,b]
    console.log(a,b);
    
}
// console.log(seq());
seq()*/

// Parallel API calls

// async function parallel() {
//     const [a,b]= await Promise.all([Promise.resolve(1),Promise.resolve(2)])
//     console.log(a,b);
    
// }
// parallel()


//Real Time example of Promises
/*function foodOrder(){
    let foofAva=true
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(foofAva){
                resolve('Food will be  delivered')
            }else{
                reject('order rejected: Food is not Available')
            }
        },2000)
    })
}
foodOrder().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}) */

/*function fileUpload(size){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(size<5){
                resolve('file uploaded succefully')
            }else{
                reject("File size is too large")
            }
        },2000)
    })
}

fileUpload(5).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})*/