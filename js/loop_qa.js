// Print numbers from 1 to 10 using for loop
// for(let i=1;i<=10;i++){
//   console.log(i);
  
// }


// Print numbers from 1 to 10 using while loop
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++
    
// }

// let i=1;
// do{
//     console.log(i);
//     i++
    
// }while(i<=10)

// Print even numbers from 1 to 50
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }

// Print odd numbers from 1 to 50
// for(let i=1;i<=50;i++){
//     if(i%2==1){

//         console.log(i);
        
//     }
// }

// Find the sum of numbers from 1 to 100
// let out=0
// for(i=1;i<=100;i++){
//     out+=i

// }
// console.log(out);

// using while loop
// let a=1;
// let b=0;
// while(a<=100){
//     b+=a
//     a++
// }
// console.log(b);

// using do while
// let c=1;
// let d=0;
// do{
//     d+=c;
//     c++
// }while(c<=100)
//     console.log(d);


// Find the factorial of a number
// let num=5;
// let out=1
// for(i=1;i<=num;i++){
//     out *= i
// }
// console.log(out);

// using while loop
// let a=5;
// let i=1;
// let b=1;
// while(i<=a){
//     b *= i
//     i++
// }
// console.log(b);

// using do while
// let j=1;
// let c=5;
// let d=1;
// do{
//     d *= j;
//     j++;
// }while(j<=c)
//     console.log(d);

// Reverse a string using a loop

// let str='India'
// let rts='';
// for(i=str.length-1;i>=0;i--){
//     rts +=str[i]
    

    
// }
// console.log(rts);

// using while loop
// let str='India';
// let rts='';
// let i=str.length-1;
// while(i>=0){
//     rts += str[i];
//     i--;
// }
// console.log(rts);

// using do while
// let str='India';
// let rts='';
// let i=str.length-1;
// do{
//     rts += str[i]
//     i--
// }while(i>=0)
//     console.log(rts);
    
// using for of loop
// let str='India'
// let rts='';
// for(let ch of str){
//     rts =ch + rts
    
// }
//     console.log(rts);


// Count vowels in a string
// let str='India'
// let out='';
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         out +=str[i]
//         count++;
        
//     }
    
// }
// console.log(out);
// console.log(count);


// using while loop
// let str='India'
// let out='';
// let count=0;
// let i=0;
// while(i<str.length){
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         out +=str[i]
//         count++;
//     }
//     i++

// }
// console.log(out);
// console.log(count);

// Find the largest and smallest number in an array
// let arr=[1,2,3,50,70,100,120,40,67]
// let a=arr[0];
// for(let i=1;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(arr[i] < a){
//         a=arr[i]
//     }    
    
// }
// console.log(a);


// using while loop
// let arr=[1,2,3,50,70,100,120,40,67]
// let a=arr[0];
// let i=1;
// while(i<arr.length){
//     if(arr[i]>a){
//         a=arr[i]
//     }
//     i++
// }
// console.log(a);

// Count even and odd numbers inside an array
// let arr=[1,2,3,53,77,100,120,45,67]
// let e_count=0;
// let odd_count=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         e_count++;
        
//     }else{
//         odd_count++
//     }
// }
// console.log(e_count);
// console.log(odd_count);

// using while loop
// let arr=[1,2,3,53,77,100,120,45,67]
// let e_count=0;
// let odd_count=0;
// let i=0;
// while(i<arr.length){
//     if(arr[i]%2==0){
//         e_count++;
        
//     }else{
//         odd_count++
//     }
//     i++

// }
// console.log(e_count);
// console.log(odd_count);

// Print each element of an array
// let arr=[1,2,3,53,77,100,120,45,67]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }
// for(let el of arr){
//     console.log(el);
    
// }
// for(let el in arr){
//     console.log(arr[el]);
    
// }

// Reverse an array manually using loop
// let arr=[1,2,3,53,77,100,120,45,67]
// let rev=[]
// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i])

// }
// console.log(rev);

// using for of loop
// for(let el of arr){
//     rev.unshift(el)
// }
// console.log(rev);

// using while loop
// let arr=[1,2,3,53,77,100,120,45,67]
// let rev=[]
// let i=arr.length-1;
// while(i>=0){
//     rev.push(arr[i])
//     i--
// }
// console.log(rev);

// Check if a number is prime or not using loop

// let n=17
// let isprime=true

// if(n<2){
//     isprime=false;
// }
// for(let i=2;i<n;i++){
//     if(n % i == 0){
//         isprime=false;
//         break;
//     }
// }
// if(isprime){
//     console.log('prime number');
    
// }else{
//     console.log("not a prime number");
    
// }

// using while loop
// let n=17
// let isprime=true
// let i=2;

// if(n<2){
//     isprime=false;
// }
// while(i<n){
//     if(i%n==0){
//         isprime=false
//         break;
//     }
//     i++
// }
// if(isprime){
//     console.log('prime number');
    
// }else{
//     console.log("not a prime number");
    
// }

// Generate multiplication table of any number
// let num=3;
// for(i=1;i<=10;i++){
//     console.log(`${num} x ${i} = ${num*i}`);
    
// }

// using while loop
// let num=3
// let i=1
// while(i<=10){
//     console.log(`${num} x ${i} = ${num*i}`);
//     i++

// }

// Print Fibonacci series up to N terms

// let n=10
// let a=0
// let b=1
// console.log(a);
// console.log(b);
// for(i=3;i<=n;i++){
//     let nxt=a+b;
//     console.log(nxt);
    
//     a=b
//     b=nxt
// }

// Count digits in a number
// let n=123456;
// let count=0;
// for(i=0;i<n.length;i++){
//     count++;
// }
// console.log(count);
// for(;n>0;n=Math.floor(n/10)){
//     count++
// }
// console.log(count);

// Calculate sum of digits
let num=1234
let sum=0
// while(num>0){
//     let dig=num%10
//     sum+=dig
//     num=Math.floor(num/10)
// }
// console.log(sum);
// let str=num.toString()
// for(let el of str){
//     sum+= Number(el)
    
// }
// console.log(sum);

// finding duplicates elements in arr

// let arr=[10,20,20,30,40,50,40,30,90]
// let seen=[]
// let dupl=[]
// for(i=0;i<arr.length;i++){
//     if(seen.includes(arr[i])){
//         dupl.push(arr[i])
//     }else{
//         seen.push(arr[i])
//     }
// }
// console.log(seen);
// console.log(dupl);

// Print all elements divisible by 3 or 5
// let arr=[1,2,3,5,7,8,9]
// let a=[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%3 ==0){
//         console.log(arr[i]);
//         a.push(arr[i])
        
//     }
// }
// console.log(a);

// Find the index of a given element in an array manually
// let arr=[1,2,3,5,7,8,9]
// let n=3;
// let idx =0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         idx = i;
//     }
    
    
// }
// console.log(idx);

// Find the second largest number
// let arr=[1,2,3,5,7,8,9,10]
// let lg=arr[0]
// let slg=0
// let tlg=0

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>lg){
//         tlg=slg
//         slg=lg
        
//         lg=arr[i]
//     }

// }
// console.log(lg);
// console.log(slg);
// console.log(tlg);

// flattening the nested Array

// let arr=[1,2,3,[4,5,6],7,8,9,[10,11,12]]
// let fla=[]
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         for(let j=0;j<arr[i].length;j++){
//             fla.push(arr[i][j]);
            
//     }
    

//     }else{
//         fla.push(arr[i])
   
//     }
    
// }
// console.log(fla);

// let out=arr.flat()
// console.log(out);

// 1️⃣1️⃣ Count occurrences of elements in an array
// ['a','b','a','c'] → {a:2,b:1,c:1}


//using loop
// let arr=['a','b','c','a']
// let count={}
// for(let i=0;i<arr.length;i++){
//     const item =arr[i]
//     count[item] = (count[item] || 0)+1
// }
// console.log(count);

//using reduce method
// const count=arr.reduce((acc,item)=>{
//     acc[item]=(acc[item] || 0)+1;
//     return acc
// },{})
// console.log(count);

//to find 2nd min num in arr
/*let arr=[1,2,3,4,5,6,7,8,9,10]
let lg=arr[0]
let slg=arr[1]
for(let i=0;i<arr.length;i++){
  if(arr[i]<lg){
    slg=lg
    lg=arr[i]
    
  }
}
console.log(lg);
console.log(slg);*/





















    



