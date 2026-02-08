// Write a function to check if a number is even or odd.
// function eo(num){
//     if(num%2==0){
//         console.log(num,"is even");
        
//     }else{
//         console.log(num,'is odd');
        
//     }
// }
// eo(5)

// Write a function to find the factorial of a number.
// let out=1;
// function fac(num){
//     for(i=1;i<=num;i++){
//          out *= i 
//     }

// }
// fac(6)
// console.log(out);


// Write a function to reverse a string.
// let out='';
// function rev(str){
//     for(let el of str){
//         out = el + out
//     }
// }
// rev('India')
// console.log(out);

// Write a function to count vowels in a string.

// let count=0;
// function co(ch){
//     // console.log(str);
//     for(let i=0;i<ch.length;i++){
//         let str=ch[i].toLowerCase()
//         if(str==='a' || str==='e' || str==='i' || str==='o' || str==='u'){
//             count++;
//         }

//     }
//     return count;

// }
// // co("India")
// console.log(co('India'));


// Write a function to check if a string is a palindrome.

// let a=''
// let b=''
// function pal(str){
//     for(i=0;i<str.length;i++){
//         a =str[i] + a
//         // b = a[i] + b
        
//     }
//     return str == a
//     // if( str === a){
//     //     console.log(str, "is palindrome");
        
//     // }else{
//     //     console.log(str,"is not palindrome");
        
//     // }
    
// }
// console.log(pal('madam'))
// console.log(a);
// console.log(b);


//  using built-in function
// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome('madam'));


// Write a function to return the largest number in an array
// let arrr=[10,20,50,70,120,180,30,40]
// function lar(arr){
//     let a=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(a > arr[i]){
//             a = arr[i];
//         }

//     }
//     return a
// }
// console.log(lar([10,20,50,70,120,180,30,40]));
// // console.log(a);
// Write a function to return the smallest number in an array.


// Write a function to calculate the sum of an array.
// function sum(arr){
//     let out=0;
//     for(i=0;i<arr.length;i++){
//         out+=arr[i]
//     }
//     return out
// }
// console.log(sum([10,20,30]));



// Write a function to find duplicate elements in an array.
// function dup(arr){
//     let see = []
//     let db =[]
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i] === arr[j] && !see.includes(arr[i])){
//                 see.push(arr[i])
//             }
//         }
//     }
//     return see
    
// }
// console.log(dup([10,20,40,20,30,30,40]));


// Write a function to remove duplicate elements from an array.

// function dup(arr){
//     let uni=[];
//     for(i=0;i<arr.length;i++){
//         if(!uni.includes(arr[i])){
//             uni.push(arr[i])
//         }
//     }
//     return uni
// }
// console.log(dup([1,2,3,1,2,4,3,5]));



// Write a function to find the index of an element in an array (manual search).
// function idx(arr,tar){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(idx([10,20,30],30));


// Write a function to count digits in a number.

// function cn(arr){
//     let cnt=0;
//     let str=arr.toString();
//     for(i=0;i<str.length;i++){
//         cnt++
//     }
//     return cnt;
// }
// console.log(cn(12345));

// using while loop and Math.florr

// function cn(num){
//     let cnt=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         cnt++
//     }
//     return cnt;
// }
// console.log(cn(123456));

// cuurrying function

// function add(a,b,c){       //normal function
//     return a+b+c

// }
// console.log(add(1,2,3));

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(1)(2)(3));

// let mul=(a,b,c)=>{return a*b*c}  //normal arrow function
// console.log(mul(1,2,3));


// let m=a=>b=>c=>{return a*b*c}    //currying arrow function
// console.log(m(2)(3)(4));


// pure function
// function add(a,b){
//     return a+b
// }
// console.log(add(1,2));
// console.log(add(1,2));

// impure function
// let count=0;
// function add(){
//     count++
//     return count
// }
// console.log(add());
// console.log(add());


//function to fing second largest number in arr

// function slg(arr){
//     let lg=arr[0]
//     let slgn=0
//     for(let i=1;i<arr.length;i++){
        
//         if(arr[i]>lg){
//             tlg=slgn
//             slgn=lg
            
//             lg=arr[i]
//         }

//     }
//     return tlg
// }
// console.log(slg([1,2,3,4,5,6,7,8,9,10]));

// closure

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;  
//     console.log(count);
//   }

//   return inner;
// }

// const fun = outer();  
// fun()

// fun();   // 1
// fun();   // 2
// fun();   // 3

// 19️⃣ Write a function to sort an array manually (bubble sort).
// function bs(arr){
//   let n=arr.length
//   for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//       if(arr[j]>arr[j+1]){
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//       }
//     }
//   }
//   return arr
// }
// console.log(bs([2,3,5,6,1]))


// Write a function to check if two strings are anagrams.
/*Two strings are anagrams if:
 They contain the same characters
 With the same frequency
 Order does not matter
 Examples:
 "listen" & "silent" → ✅ Anagram
"hello" & "world" → ❌ Not anagram*/

// function isAnagram(str1,str2){
//     str1=str1.replace(/\s+/g,"").toLowerCase()
//     str2=str2.replace(/\s+/g,"").toLowerCase()

//     if(str1.length !== str2.length){
//         return false
//     }
//     const sorted1=str1.split('').sort().join('')
//     const sorted2=str2.split('').sort().join('')
//      return sorted1 === sorted2
// }

// console.log(isAnagram("listen","silent"))


// Write a function to capitalize the first letter of each word in a sentence.

// function cap(words){
//     return words.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
// }
// console.log(cap("how are you"));

// Write a function to convert a number to words (e.g., 123 → One Two Three).

function numberToWords(num) {
  const words = [
    "Zero", "One", "Two", "Three", "Four",
    "Five", "Six", "Seven", "Eight", "Nine"
  ];

  return num
    .toString()
    .split("")
    .map(digit => words[digit])
    .join(" ");
}

console.log(numberToWords(123))
