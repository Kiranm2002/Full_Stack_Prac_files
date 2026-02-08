// function greet(){
// console.log("hello")
// }
// setTimeout(greet,3000)

// function greet(){
// console.log("hello")
// }
// setInterval(greet,3000)

let country=['IND','AUS','USA','CAN']
// country.forEach(el => console.log(el.toLowerCase()))

let num=[2,4,6,7,8]
//  num.forEach(el => console.log(el*el))

// num.map(el => console.log(el*el))

// let out =num.map(el => (el*el))
// console.log(num);

// console.log(out)

// let eve=num.filter(el => el%2===0)
// console.log(eve);
//  let out=num.reduceRight((acc,el) => acc-el )
//  console.log(out);
//  let out=country.reduceRight((acc,el) => acc+el )
//  console.log(out);
 
// let age=[18,20,12,56,89]
// // let out=age.every((el=>el>=18))
// let out=age.some((el=>el>=18))
// console.log(out);

// let matrix=[[1,2,3,4],[5,6,[7,8],9],[10,20,30,40]]
// console.log(matrix.flat(2))
// let matrix=[[1,2,3,4],[5,6,7,8,9],[10,20,30,40]]
// console.log(matrix.flatMap(el_arr=>el_arr.map(el =>el*2)));
//  let a=[10,20,30,40,50,60,90]
// // console.log( a.find(el=>el%4==0));
// console.log( a.findIndex(el=>el%4==0));

// let a=[10,20,30,111,120,40,50,60,90]
// console.log(a.sort((a,b)=> b-a));

// function greet(name) {
//   return "Hello " + name;
// }

// function processUser(name, callback) {
//   console.log(callback(name));
// }

// processUser("Kiran", greet);

// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// let double = multiplier(2);
// console.log(double(5)); // 10

function greet(name) {
  return "Hello " + name;
}

function processUser(name,callback) {
  console.log(callback(name));
}

processUser("Kiran", greet);
// console.log(greet('kiran'));

