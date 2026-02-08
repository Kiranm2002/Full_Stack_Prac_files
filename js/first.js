// let items = [250,645,300,900,50];
// let i =0;
// for(let val of items){
//     offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`price after offer = ${items[i]}`)
//     i++;
// }
// let items = [250,645,300,900,50];
// for(i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items)

// let companies = ['Bloomberg','Microsoft', 'Uber','Google', 'IBM','Netflix'];
// companies.shift()
// console.log(companies)
// companies.splice(2,1,"Ola")
// console.log(companies)
// companies.push("amazon")
// console.log(companies)

// function sum(a,b){
//     return a + b;
// }
// // let val = sum(1,2)
// // console.log(val)
// sum(1,2);

// function count(str){
//     let cnt = 0;
//     for(const val of str){
//         if(val === 'a'|| val === 'e'|| val === 'i'|| val === 'o'|| val === 'u'){
//             cnt++;

//         }
        
//     }
//     console.log(cnt)
// }
// const countVow = (str) => {
//     let cnt = 0;
//     for(const val of str){
//         if(val === 'a'|| val === 'e'|| val === 'i'|| val === 'o'|| val === 'u'){
//             cnt++;

//         }
        
//     }
//     console.log(cnt)

// }

// let nums = [1,2,3,4,5,6]
// nums.forEach((val)=>{
//     console.log(val*val)
// })

// let nums = [1,2,3,4,5,6,7,8,9];

// let evenarr= nums.filter((val)=>{
//     return val % 2 === 0
// })
// console.log(evenarr)

// let marks = [98,92,87,67,95,94,72,78];
// let out = marks.filter((val)=>{
//     return val > 90;
// })
// console.log(out)

// let n = prompt("Enter a number");
// let arr = [];
// for(i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// let sum = arr.reduce((res, curr)=>{
//     return res * curr
// })
// console.log(sum)