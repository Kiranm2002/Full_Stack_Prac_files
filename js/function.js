// function add(num1, num2){
//     return num1+num2

const { log } = require("node:console");

    
// }
//  let sum=add(1,2)
//  console.log(sum);

// function sac(num){
//     let sqr=num**2
//     let cube=num**3
//     return [sqr,cube]
// }
// console.log(sac(2));

// let x=10
// {
//     const y=20
// }
// console.log(x);
// console.log(y);
// function outerfun(){
    
//     console.log("outer");
//     function innerfun(){
//         console.log("inner");
        
//     }
//     return innerfun
    
    
// }
//   out=outerfun()()

// var a;     // hoisted
// a = 10;
// console.log(a);
//     // assignment not hoisted
// console.log(x);  // ❌ Error
// let x = 5;

// function greet(name){
//     console.log("hello" + name);

    
// }
// greet('Kiran')
// let add=function(a,b){
//     return a+b
// }
// console.log(add(1,2));

// let addi=(a,b)=>a+b;
// console.log(addi(1,2));

// (function() {
//   console.log("I run immediately!");
// })();

// function greet(name, my) {
    
//     console.log("Hello " + name);
//     my(); // calling the function passed as argument
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Kiran", sayBye);

// let sum=(a,b)=>{return (a+b)}

// console.log(sum(3,2))

// function vowel(string){
//     let count=0;
//     for(let char of string){
//         if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ){
//             count++;
//         }
        
        
//     }
//     console.log(count)
    
// }
// vowel("Kiran")

// let vow=(str)=>{
//     let count=0;
//     for(let char of str){
//         if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ){
//             count++;
//         }
        
        
//     }
//     console.log(count)

// }
// vow("abcdefghi")

// let arr=[1,2,3,4,5,6,7,8]
// // let out =arr.forEach((val) => {return val * val})
// // console.log(out);
// let out =arr.reduce((acc,val) => {return acc > val ? acc : val})
// console.log(out);
//  let marks=[97,64,32,49,99,96,86]
//  let out=marks.filter(val=>{return val > 90})
//  console.log(out);
 
// let n = prompt("enter a number")
// let arr=[]
// for(let i=1;i<=n;i++){
//     arr[i-1]=i
// }
// console.log(arr);
// let out = arr.reduce((acc,cur)=>{return acc*cur})
// console.log(out);

// function hello(name){
//     return 'hello'+name
    
// }
// console.log(hello("kiran"))
// let a=function(a,b){
//     return a+b
// }
// console.log(a(1,2));

// let b=(a,b)=>{
//     return a*b
// }
// console.log(b(2,3));

// function greet(name,cl){
//     console.log("hello"+name);
//     cl();
// }
// function gree(){
//     console.log("bye")
    
// }
// greet("kiran",gree)

// function outer(){
//     console.log("hello"+name);
    
//     function inner(){
//         let name="kiran"
 
//         console.log(name);
        
        
//     }
//     inner()
// }
// outer()

// function ad(a,b,c){
//     return a+b+c
// }
// console.log(ad(1,2,3));

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(1)(2)(3));

// const mul= a=>b=>c=> {return a*b*c}
// console.log(mul(1)(2)(3));

// function greet(msg){
//     return function(name){
//         console.log(msg+" "+name);
        
//     }
// }
// const say=greet("hello")
// say("kiran")

// function outer(){
//     let count=0;
//     function inner(){
//         count++
//         console.log(count);
        
//     }
//     return inner
// }
// let fun=outer()
// fun()
// fun()

// function fun1(name){
//     return "hello"+name
    
// }
// function fun2(name,cl){
//     console.log(cl(name))
    
// }
// fun2("kiran",fun1)

// function greet(name,cb){
//     console.log("hello"+name);
//     cb();
    
// }
// function bye(){
//     console.log("bye");
    
// }
// greet("kiran", bye)

// function printNumbers(n) {
//     if (n > 5) return;     // base condition
//     console.log(n);
//     printNumbers(n +1)
// }
// printNumbers(1)

// function add(a,b,c){
//     return a+b+c
// }
// console.log(add(1,2,3));
//  function addd(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
//  }
//  console.log(addd(1)(2)(3));
 

// function outer(){
//     let count=0

//     function inner(){
//         count++
//         console.log(count);
        
        
//     }
//     return inner
// }
// let fn=outer()
// fn()
// fn()

// function greet(name){
//     return 'hello'+name
// }
// function user(name,cl){
//     console.log(cl(name));
    
// }
// user("kiran",greet)

// function greet(){
//     return "hello"+this.name
// }
// const person={name:"kiran"}
// console.log(greet.call(person))

// function sum(a,b){
//     // console.log(a+b);
    
// }
// function cal(a,b,sumcl){
//     return sumcl(a,b)
// }
// cal(1,2,(a,d)=>{
//     console.log(a+d);
    
// })

// function getData(dataId,getNxt){
//     setTimeout(()=>{
//      console.log("data",dataId);
//      if(getNxt){
//      getNxt()

//      }

//     },2000)
    
// }
// getData(1,()=>{getData(2,()=>{getData(3,()=>{getData(4)})})})
// // getData(2)

// function greet(name,cl){
//     console.log(name);
//     cl()
    
    
// }
// function gree(){
//     console.log("hi");
    
// }
// greet("kiran",gree)

// function printNumbers(n) {
//     if (n > 5) return;     // base condition
//     console.log(n);
//     printNumbers(n +1)
// }
// printNumbers(1)

// function add(a,b,c){
//     return a+b+c
// }
// console.log(add(1,2,3))

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(1)(2)(3))

// function outer(){
//     let co=0;
//     function inner(){
//         co++
//         console.log(co);
        
//     }
//     return inner
// }
// let f1=outer()
// f1()
// f1()

// function deepClone(obj) {
//   let copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       copy[key] = deepClone(obj[key]);
//     } else {
//       copy[key] = obj[key];
//     }
//   }
//   return copy;
// }

// console.log(deepClone({name:"kiran",age:23}))

// function greet(){
//     console.log("hello")
    
// }
// function hi(name,cl){
//     console.log("hello"+name)
//     cl()
// }

// hi("kiran",greet)
// function greet(name,cl){
//     console.log("hello"+name);
//     cl
// }
// function say(names){
//     console.log("bye"+names);
    
// }
// greet("kiran",say("kiran"))

// function pn(n){
//     if(n>5){
//         return
//     }
//     console.log(n);
//     pn(n+1)
    
// }
// pn(1)

// function outer(){
//     let count=0;

//     function inner(){
//         count++
//         console.log(count);
        
//     }
//     return inner
// }
// let g1=outer()
// g1()
// g1()

// function greet(){
//     return 'Hello'
// }
// function outer(name,cl){
//     console.log(cl(name));
    
// }
// outer("kiran",greet)
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log("Hello " + this.name);
// };

// const p1 = new Person("Kiran");
// p1.sayHello();

// let ex=function(){
//   console.log("hello")
// }
// ex()

// function greet(name,cl){
//   console.log("hello"+name);
//   cl
  
// }
// function bye(na){
//   console.log('bye'+na)
// }
// greet('kiran',bye('aa'))

// function pn(n){
//   if(n>5) return;
//   console.log(n);
//   pn(n+1)
  
// }
// pn(1)
// let count=0
// function outer(){
//   count++
// }
// outer()
// console.log(count)
// outer()
// console.log(count)

// function message(msg){
//   return function(name){
//     return msg + name
//   }
// }
// let g1=message("hello")
// console.log(g1('kiran'));
// console.log(g1('Rohan'));

// function counter(){
//    let count=0;
//    function inner(){
//     count++
//     console.log(count)
//    }
//    return inner
// }

// let g1=counter()
// g1()
// g1()

function* num(n){
   for(let i=0;i<=n;i++){
      yield i
   }
}
let g1=num(3)
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
