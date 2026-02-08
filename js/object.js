// let student = {
//     firstName:'Kiran',
//     lastName:'M',
//     fullName:function(){
//         return this.firstName +' '+this.lastName;
//     }

// console.log(typeof(student));
// console.log(student.fullName());
// student=Object.assign({},student,{skills:['cricket']})
// student.age=23;
// console.log(student);

// let student2=Object.assign({},student);
// console.log(student2);
// delete student2.age
// console.log(student2)

// console.log(Object.keys(student));
// console.log(Object.values(student));

// const obj = new Object()
// obj.name='kiran'
// obj.age=23
// console.log(obj);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const u1 = new User("Kiran", 23);
// console.log(u1);

// console.log(obj['age']);
// const user = {
//   name: "Kiran",
//   address: {
//     city: "Bangalore",
//     pincode: 560001
//   }
// };

// console.log(user.address);
// let student={
//   fullName: function(age,city){
//     return this.firstName + ' ' + this.lastName + age + city
//   }
// }
// let sachin={
//   firstName:'Sachin',
//   lastName:'Tendulakr'

// }
// let virat={
//   firstName:'Virat',
//   lastName:'Kohli'

// }
// let out=student.fullName.apply(sachin,[36,'Mumbai'])
// console.log(out);

// let firstName="kiran"
// let lastName='kumar'
// let student={
//   firstName:'Virat',
//   lastName:'kumar',
//   fullName:function(){
//     return this.firstName + this.lastName
//   }
// }

// student = Object.assign(student,{skils:["reading"]})

// let student2=Object.assign({},student)
// let student2=student
// student.age=23;

// delete student2.age

// // console.log(Object.values(student));
// // console.log(student2);

// let x='india'
// let y=23
// let z=[1,2,3]
// console.log(x.__proto__);
// console.log(y.__proto__);
// console.log(z.__proto__);
// console.log(student.__proto__);
// console.log(Object.getPrototypeOf(student));

// let college={
//   name:'KIT'
// }
// console.log(Object.getPrototypeOf(student));

// Object.setPrototypeOf(student,college)
// console.log(Object.getPrototypeOf(student));
// console.log(student);

// let student={
//   fullname:function(age,city){
//     return `${age} + ${city} + ${this.firstname} + ${this.lastname}`
//   }
// }
// let sachin={
//   firstname:"sachin",
//   lastname:"Tendulakr"
// }
// let virat={
//   firstname:"virat",
//   lastname:"Kohli"

// }
// let out=student.fullname.bind(sachin,40,"Mumbai")
// console.log(out());
// let out1=student.fullname.call(virat)
// console.log(out1);

// let stu={
//   name:'kiran',
//   skills:'writing'
// }
// console.log(stu);

// stu = Object.assign({},stu,{skills:["reading"]})
// console.log(stu);

// let obj1={

//   name:"kiran",
//   age:23,
//   addr:{
//     city:"bang",
//     pin:560040
//   }
// }
// let obj={...obj1}
// console.log(obj.addr.city);


// function greet(city,age){
//   console.log(city+this.name+age)
// }
// const person={name:"kiran"}
// let a=greet.bind(person,"mumbai",23)
// a()

// function person(name){
//   this.name=name
// }
// person.prototype.sayhello=function(){
//   console.log(this.name+"hello");
  
// }
// let p1=new person("kiran")
// p1.sayhello()

// let student={
//   name:"kiran",
//   age:23,
//   addr:{
//         city:"bang",
//         pin:560040
//   }
// }
// console.log(student);

// let stu1={...student}
// console.log(stu1);

// let obj={
//   name:"kiran",
//   skills:["HTML","CSS"]
// }
// console.log(obj);
// let obj1=structuredClone(obj)
// obj1.skills.push("JS")
// console.log(obj1);
// console.log(obj);

// let clone={}
// for(let key in obj){
//   clone[key]=obj[key]
// }
// console.log(clone);


// let student = {
//   name: "Kiran",
//   marks: {
//     math: 90,
//     science: 85
//   }
// };
// let copy1={...student}
// // copy1.marks.math=100
// // copy1.name="rohan"
// // console.log(copy1);
// // console.log(student);

// let copy2=Object.assign({},student)
// // copy2.marks.science=95
// copy2.name="darshan"
// console.log(copy2);
// console.log(student);
// console.log(copy1);


// let stu={
//   name:"kiran",
//   greet:function(){
//     return "hello"+this.name
//   }
// }
// console.log(stu.greet());

// let obj = {
//   today: new Date()
// };
// // console.log(obj);

// let obj1 = {
//   data: new Map([["a", 1]]),
//   values: new Set([1, 2, 3])
// };
// console.log(obj1);


// let copy = JSON.parse(JSON.stringify(obj));

// console.log(copy.data);   // {} ❌
// console.log(copy.values); // {} ❌


// // let clone1=JSON.parse(JSON.stringify(stu))
// let clone1=JSON.parse(JSON.stringify(obj))

// console.log(clone1.greet);  // does not support function
// console.log(clone1); //date becomes string

// console.log(clone1.today instanceof Date);

// let student={
//   name:"kiran",
//   greet:function(){
//     return 'hello'+this.name
//   }
// }
// console.log(student.greet());

// let clone1=structuredClone(student)
// console.log(clone1);


// let obj = { today: new Date() };
// let copy = structuredClone(obj);
// console.log(copy);

// console.log(copy.today instanceof Date); // true ✅

let obj1={
    name:'kiran',
    age:23,
    city:{
        add:'bang'
    }
}
obj1['cgpa']=8.15
console.log(obj1);
 let obj2={...obj1}
 console.log(obj2);
 obj2.roll=21

 console.log(obj1);
 console.log(obj2);
 
 




// let clone2=structuredClone(stu)
// console.log(clone2.greet());

// clone2.marks.sc=90
// console.log(clone2);
// console.log(stu);
// console.log(clone1);














