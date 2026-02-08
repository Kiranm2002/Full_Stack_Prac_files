// let day=3
// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;

// }
// let age =19

//  let out = age? 'can vote' : 'cannot vote'
//  console.log(out);
 

// let marks=90

// switch(marks){
//     case (marks>90):
//         console.log("Grade A");
//     break;
//     case (marks>80):
//         console.log("grade B");
        

    
// }
// console.log(marks);

// age=18;
// age>=18?console.log("yes"):console.log("no")

let marks=90;

// switch(true){
//     case (marks>=90):
//         console.log('A');
//         break;
//     case (marks>=80):
//         console.log('B');
        
// }

class parent{
    constructor(name,age){
         this.name=name
        this.age=age
    }
    get greet(){
        console.log('hello'+this.name);
        
    }
       
}
class child extends parent{
    say(){
        console.log(this.name);
        
    }
}

let p1=new child('kiran',23)
// console.log(p1);
p1.greet


