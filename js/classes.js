// class Student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//         console.log("Hello"+this.name);

// const { log } = require("node:console")

        
//     }

// }
// let s1=new Student("kiran",21)
// s1.greet()


// class MathUtil {
//   static add(a, b) {
//     return a + b;
//   }
//   sub(){
//     console.log(this.a - this.b) 
//   }
// }

// console.log(MathUtil.add(5, 3)); // ✔ Works
// let a=MathUtil.add(5, 3);
// console.log(a(sub));
 
// class Student{
//     constructor(name,age){
//         this.na=name
//         this.age=age
//     }
//     get name(){
//         return this.na
        
//     }
// }
// let u1=new Student("Kiran",23)
// console.log(u1);
// console.log(u1.name)

// class User {
//   set age(value) {
//     if (value < 18) {
//       console.log("Age must be 18+");
//     } else {
//       this._age = value;
//     }
//   }
// }

// const u1 = new User();
// u1.age = 17;
// // console.log(u1);

// class Student{
//     constructor(name){
//         this.na=name
//     }
// }
// class person extends Student{
//     constructor(name,course){
//         super(name)
//         this.co=course
//     }
//     greet(){
//         console.log("hello"+this.name+this.course);
        
//     }
// }
// let u1=new person
// u1.greet("Kiran","MERN")

// class Student{
//     constructor(name){
//         this.name=name
//         this.age=23
//         console.log(this.name+this.age);
        
//     }
//      greet(){
//         return this.name+this.age
        
//     }
// }
// let s1=new Student(52)
// console.log(s1.greet())

// class sett{
//     set age(value){
//         if(value<18){
//             console.log("age must be 18+");
            
//         }else{
//             console.log("can vote");
            
//         }
//     }
// }
// s1=new sett()
// s1.age=23

// class sett{
//     constructor(name){
//         this._name=name
//         // console.log(this._name);
        
//     }
//     set name(value){
//          this._name=value
//     }
//     get name(){
//         return this._name
//     }

// }
// let g1=new sett('rohan')

// console.log(g1.name)
// g1.name="kiran"
// console.log(g1.name);

// class a1{
//     constructor(name,age){
//         this._name=name
//         this._age=age
//     }
//     greet(){

//         console.log("hello"+this._name);
        
//     }
// }
// class a2 extends a1{
//     constructor(cgpa){
//         super(name,age)
//         this._c=cgpa
//     }
// }

// let s1=new a2(8)
// s1.greet()

// class Person {
//   greet() {
//     console.log("Hello");
//   }
// }

// class Student extends Person {
//   study() {
//     console.log("Studying");
//   }
// }

// const s1 = new Student();
// s1.greet(); // inherited
// s1.study();

// class person{
//     constructor(name){
//         this._name=name
//     }
// }
// class student{
//     constructor(age){
//         super(name)
//         this._age=age
//     }
// }
// let s1=new student(23)
// s1

// class parent{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//         console.log("Hello"+this.name);
        
//     }
// }
// class child extends parent{
//     constructor(name,age,course){
//         super(name,age);
//         this._cou=course

//     }
//     study(){
//         super.greet()
//         console.log(this.name+"is studying"+this._cou);
        
//     }
// }
// let s1=new child("kiran",23,'JS')
// s1.study()
// s1.greet()

// class student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//         console.log('hi'+this.name);
        
//     }
// }

// class greet extends student{
//     constructor(name,age,course){
//         super(name,age)
//         this.course=course
//     }
//     study(){

//         console.log('studying'+this.course);
        
//     }
// }
// let s1=new greet("kiran",23,"JS")
// s1.study()
// s1.greet()


// class User {
//   set age(value) {
//     if (value < 18) {
//       console.log("Age must be 18+");
//     } else {
//       this._age = value;
//       console.log("Allowed");
      
//     }
//   }
// }

// const u1 = new User();
// u1.age = 20;

// class greet{
//   greet2(){
//       console.log('hello');
//   }
    
    
// }
// class greet1 extends greet{
//   greet3(){
//     console.log("hi");
    
//   }
// }

// let g1=new greet1()
// g1.greet2()

// class parent{
//   start(){
//     console.log("car start");
    
//   }
// }class child extends parent{
//   start(){
//     super.start()
//     console.log("car start with key");
    
//   }
// }

// let p1= new child()
// p1.start()

// function add(){
//   if(arguments.length===2){
//     return arguments[0]+arguments[1]
//   }else if(arguments.length===3){
//       return arguments[0]+arguments[1]+arguments[2]
//   }

  
// }
// console.log(add(1,2,3));


// function add(...args) {
//   return args.reduce((sum, val) => sum + val );
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3, 4));

// class class1{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   get greet(){
//     return "hello"+this.name
    
//   }
// }
// let g1=new class1("kiran",23)
// console.log(g1.greet)

// class Bank {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// let b1= new Bank()
// b1.deposit(100)
// console.log(b1.getBalance())

class clname{
    constructor(name,age){
      this.age=age
      this.name=name
    }
    greet(){
      console.log("hello"+this.name);
      
    }
}

class inner extends clname{
  constructor(name,cgpa){
    super(name)

  }
  prin(){
    console.log("hi"+this.name);
    
  }
}
let g1=new inner('kiran')
g1.prin()