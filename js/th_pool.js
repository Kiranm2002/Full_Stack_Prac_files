// console.log("start");
// clearTimeout( setTimeout((name)=>{
//     console.log("Timout",name);
    
// },1000,"kiran"))
// // console.log("end");
// console.log(timers);
// clearTimeout(timers)

// let count=0
// let inter = setInterval(()=>{
//     count++
//     console.log(count);

//     if(count===5){
//         clearInterval(inter)
//     }
    
// },1000)
console.log("start");

process.nextTick(()=>{
    console.log("hello");
    
})
// let pro= new Promise((res,rej)=>{
//     res('success')
    
// })
// pro.then((result)=>{console.log(result)})

setImmediate(()=>{
    console.log("Run imm");
    
})
setTimeout(()=>{
    console.log("hello");
    
})

console.log('end')
