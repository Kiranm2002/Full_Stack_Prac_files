// let pattren = /hello/
// let pat=new RegExp('hello')

const { log } = require("node:console")

// /hello/test("hello world")
// /'hello'/.test("hello world")  // true
// let out = /hello/.test("hello world")
// console.log(out);

// let ou=/\\/.test("") // true

// console.log(ou);


// let email=/^[\w.-]+@[\w-]+\.[A-Za-z]{2,}$/
// console.log(email.test("kiran0m@gmail.com"));

// let phone=/^[6-9]\d{9}$/
// console.log(phone.test(7619401943));

// let str=/^\w+$/
// console.log(str.test("kiran123"));

// let out='hello123world456'.match(/\d+/g)
// console.log(out);

// let em=/^[\w.-]+@[\w-]+\.[A-Za-z]{2,}$/

// let a="hello world"
// let b=a.match(/hello/)
// console.log(b)

// let a= "hello123".replace(/\d/g, "") 
// console.log(a)

// let email=/^[\w-\.]+@([\w-]+\.)[A-za-z]{2,4}$/
// console.log(email.test("kiran@gmail.com"));

// let email=/^[\w-\.]+@([\w\.]){2,4}$/
// console.log(email.test("kiran@gmail.com"));

// let email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// // console.log(email.test("kiran@gmail.com"));

// let ph=/^[6-9]\d{9}$/
// console.log(ph.test(7619401943))

// let out = "hello@123".replace(/\d/g,"")
// console.log(out);
// let email=/^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/
// console.log(email.test("kiran@gmail.com"))

// let phone=/^[6-9]\d{9}$/
// console.log(phone.test(7619401943));

// let email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// console.log(email.test("kiran7619401943@gmail.com"));

// let phn=/^[6-9]\d{9}$/

let email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
console.log(email.test('kiran@gmail.com'));




