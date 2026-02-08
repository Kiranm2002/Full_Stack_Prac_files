// let str='kiran'
// let object={
//     item:'pen',
//     price:20
// }
// console.log(`The price of ${object.item} is ${object.price}`)
// let dtr='kiran'
// console.log(dtr.slice(2,5));
// 65
// console.log("AB".charCodeAt(1));
// console.log("5".padStart(3, "0"));

// let str='India'
// // let rev=str.split('').reverse().join('')
// // console.log(rev);
// let reversed = "";

// for(let i = str.length-1 ; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);
// console.log(str.length);
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("JSqwe"));





