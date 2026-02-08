let data =`[{
  "id": 1,
  "first_name": "Jeanette",
  "last_name": "Penddreth",
  "email": "jpenddreth0@census.gov",
  "gender": "Female",
  "ip_address": "26.58.193.2"
}, {
  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212"
}, {
  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
}, {
  "id": 4,
  "first_name": "Willard",
  "last_name": "Valek",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26"
}]`

// // data=`["kiran"]`
// console.log(typeof(data));
// let js_data=JSON.parse(data)
// let mod=JSON.stringify(js_data,["first_name"],4)
// console.log(mod);
 let obj={
  name:'kiran',
  age:23,
  addr:{
    city:'bang',
    pin:560040
  }
 }
//  let obj1=JSON.stringify(obj)
// console.log(obj1);
// let obj2=JSON.parse(obj1)
// console.log(obj2);

let out=JSON.stringify(obj)
console.log(out);

