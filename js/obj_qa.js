
//To remove duplicate elements in array of objects

// const { loadavg } = require("node:os");

// let arr=[
//         {stud1:'ABC', age:23, city:'bang'},
//         {stud2:'EFG', age:24, city:'bang'},
//         {stud3:'HIJ', age:25, city:'bang'}
// ]

// let result=[]
// for(let i=0;i<arr.length;i++){
//     let newobj={}
//     for(let key in arr[i]){
//         if(key==='city' && i !== 0){
//             continue
//         }
//         newobj[key]=arr[i][key]
//     }
//     result.push(newobj)

// }
// console.log(result);

//same to remove completely a key-value from all obj in arr

// let result=[]
// for(let i=0;i<arr.length;i++){
//     let newobj={}
//     for(let key in arr[i]){
//         if(key !=='city'){
//             newobj[key]=arr[i][key]
//         }
        
//     }
//     result.push(newobj)

// }
// console.log(result);


//Sort an array of objects by a numeric property (age, price)

// let arr1=[
//         {stud1:'ABC', age:25, city:'bang'},
//         {stud2:'EFG', age:23, city:'bang'},
//         {stud3:'HIJ', age:22, city:'bang'}
// ]
// console.log(arr1.length);
// arr1.sort((a,b)=>a.age-b.age)  // using built in function (for decs = b.age-a.age)
// console.log(arr1);


// for(let i=0;i<arr1.length-1;i++){        // using loop = Bubble sort
//     for(let j=0;j<arr1.length-1-i;j++){
//         if(arr1[j].age > arr1[j+1].age){
//             let temp=arr1[j];
//             arr1[j]=arr1[j+1];
//             arr1[j+1]=temp;
//         }
//     }

// }
// console.log(arr1);

// 7️⃣ Sort an array of objects by string property (name / city)

// let students = [
//   { name: 'Rahul', city: 'Delhi' },
//   { name: 'Amit', city: 'Mumbai' },
//   { name: 'Sneha', city: 'Bangalore' },
//   { name: 'Kiran', city: 'Chennai' }
// ];
// using built-in sort method
// students.sort((a,b)=>a.name.localeCompare(b.name))  //for dec interchange a and b
// console.log(students);


//using loop
// for(let i=0;i<students.length-1;i++){   
//     for(let j=0;j<students.length-1-i;j++){
//         if(students[j].city.name < students[j+1].city.name ){
//             let temp=students[j];
//             students[j]=students[j+1];
//             students[j+1]=temp
//         }
//     }
// }
// console.log(students);



//to sort name and city at same time
// let students = [
//   { name: 'Rahul', city: 'Delhi' },
//   { name: 'Amit', city: 'Mumbai' },
//   { name: 'Rahul', city: 'Bangalore' },
//   { name: 'Amit', city: 'Delhi' }
// ];


// //using sort method
// students.sort((a,b)=>{
//     let naco=a.name.localeCompare(b.name)
//     if(naco !==0){
//         return naco
//     }
//     return a.city.localeCompare(b.city)
// })
// console.log(students);



//using loops
// for(let i=0;i<students.length-1;i++){   
//     for(let j=0;j<students.length-1-i;j++){
//         if(students[j].name > students[j+1].name ||
//              (students[j].name === students[j+1].name && students[j].city > students[j+1].city )){
//             let temp=students[j];
//             students[j]=students[j+1];
//             students[j+1]=temp
//         }
//     }
// }
// console.log(students);




// 8️⃣ Find an object with a specific property value
// find student where age > 25

// let arr=[
//         {stud1:'ABC', age:25, city:'bang'},
//         {stud2:'EFG', age:23, city:'bang'},
//         {stud3:'HIJ', age:26, city:'bang'}
// ]


//using filter method
// let out = arr.filter((el)=>el.age>=25)
// console.log(out);


// let res=[]
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(arr[i]["age"]>=25){
//         res.push(arr[i].age);
        
//     }
    
// }
// console.log(arr);
// console.log(res);


// 9️⃣ Filter objects based on condition
// employees from "bangalore"
// let arr=[
//         {stud1:'ABC', age:25, city:'bang'},
//         {stud2:'EFG', age:23, city:'chennai'},
//         {stud3:'HIJ', age:26, city:'Bang'}
// ]

//using filter
// let res=arr.filter((el)=> el.city === 'chennai')
// console.log(res);


//using loop
// let out=[]
// for(let i=0;i<arr.length;i++){
//     let res=arr[i].city.toLocaleLowerCase()
    
//         if(res === 'bang'){
//             out.push(arr[i])
            
//         }
    
// }
// console.log(out);


// 🔟 Remove duplicate objects from an array (unique key comparison)
// let users = [
//   { id: 1, name: 'Amit', city: 'Bangalore' },
//   { id: 2, name: 'Ravi', city: 'Delhi' },
//   { id: 1, name: 'Amit', city: 'Bangalore' },
//   { id: 3, name: 'Sneha', city: 'Mumbai' },
//   { id: 2, name: 'Ravi', city: 'Delhi' }
// ];

//using filter and findIndex
// let result = users.filter(
//   (obj, index, self) =>
//     index === self.findIndex(u => u.id === obj.id)
// );

// console.log(result);


/*using loop
// let res=[]
// for(let i=0;i<users.length;i++){
//     let dup=false
//     for(let j=0;j<res.length;j++){
//         if(users[i].id === res[j].id){
//            dup=true;
//            break;
//         }
        
//     }
//     if(!dup){
//         res.push(users[i])
//     }
// }

// console.log(res);*/


// 1️⃣2️⃣ Group array of objects by property
/* const people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 21 },
//   { name: 'David', age: 25 }
// ];*/

// //using loop
/*const grouped={}
for(let i=0;i<people.length;i++){
  let person=people[i]
  let key=person.age

  if(!grouped[key]){
    grouped[key]=[]

  }
  grouped[key].push(person)
  
}
  console.log(grouped);*/

//using reduce method

/*let gr=people.reduce((acc,person)=>{
  let key=person.age

  if(!acc[key]){
    acc[key]=[]
  }
  acc[key].push(person)
  return acc
},{})
console.log(gr);*/

// 1️⃣3️⃣ Merge two arrays of objects based on common id
// const arr1 = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ];

// const arr2 = [
//   { id: 1, age: 21 },
//   { id: 2, age: 25 }
// ];


//using loop
/*let merg=[]
for(let i=0;i<arr1.length;i++){
  for(let j=0;j<arr2.length;j++){
    if(arr1[i].id === arr2[j].id){
      merg.push({...arr1[i],...arr2[j]})
    }
  }
}
console.log(merg);*/

// ✅ 2. Using map + find (clean & readable)
// const merged=arr1.map(item1=>{
//   const match=arr2.find(item2=>item2.id === item1.id)

//   return {...item1,...match}
// })
// console.log(merged)

// 1️⃣1️⃣ Count occurrences of elements in an array
// ['a','b','a','c'] → {a:2,b:1,c:1}
// let arr=['a','b','c','a','b']
/*using loop
let count={}
for(let i=0;i<arr.length;i++){
  let item=arr[i]
  // console.log(item);
  if(count[item]){
    count[item]++
  }else{
    count[item]=1
  }
  
}
console.log(count);*/

/* using for of lopp
let count={}
for(let item of arr){
  count[item]=(count[item] || 0)+1
}
console.log(count);*/

/*using built in reduce method
let res=arr.reduce((acc,item)=>{
  acc[item]=(acc[item] || 0)+1
  return acc
},{})
console.log(res);*/


// 1️⃣4️⃣ Convert array to object
// ['a','b'] → {a:true, b:true}
// let arr=['a','b']
/*using loop
let obj={}
for(let i=0;i<arr.length;i++){
  obj[arr[i]]=true
}
console.log(obj);*/

/* using reduce method
let res=arr.reduce((acc,item)=>{
  acc[item]=true;
  return acc
},{})
console.log(res);*/


// 1️⃣5️⃣ Convert object to array
// {name:'A', age:20} → [['name','A'],['age',20]]

// let obj={name:'kiran',age:23}
/*using loop
let result=[]
for(let key in obj){
   result.push(key,obj[key])
  
}
console.log(result);*/

/*using object.entries method
let res=Object.entries(obj)
console.log(res);*/



// 1️⃣7️⃣ Flatten a nested array
// let arr=[1,[2,3],[4,5,[4,5,6]],6,7,8,9]
// let res=[]

/*using loop for only one gen nested
for(let i=0;i<arr.length;i++){
  // console.log(arr[i]);
   if(Array.isArray(arr[i])){
     for(let j=0;j<arr[i].length;j++){
      res.push(arr[i][j])
     }
   }else{
    res.push(arr[i])
   }
   
}
console.log(res);*/

/*using recursive call for 2nd and 3rd gen nested elements 
function flattenAr(input){
  for(let i=0;i<input.length;i++){
    if(Array.isArray(input[i])){
      flattenAr(input[i])
    }else{
      res.push(input[i])
    }
  }
}
flattenAr(arr)
console.log(res);*/


// 1️⃣8️⃣ Deep clone an object
// Concept: reference vs value
/*const original = {
  name: "Alice",
  age: 20,
  scores: [10, 20, 30],
  address: { city: "NY", zip: 10001 }
};

function deepClone(obj){
  if(obj === null || typeof obj !== 'object') return obj;
  if(Array.isArray(obj)){
    return obj.map((item)=>deepClone(item))
  }
  const clone = {};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      clone[key]=deepClone(obj[key])
    }
  }
  return clone;

}
let copy = deepClone(original)
copy.address.city='LA'
copy.scores.push(40);

console.log(copy);
console.log(original);*/

// 1️⃣9️⃣ Check if two objects are equal
// Concept: deep comparison

/*const objA = { name: "Alice", age: 20, address: { city: "NY" } };
const objB = { name: "Alice", age: 20, address: { city: "NY" } };
const objC = { name: "Bob", age: 20, address: { city: "NY" } };

function isEqual(obj1,obj2){
  if(obj1 === obj2){
    return true
  }
  if(obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object'){
    return false
  }

  let key1=Object.keys(obj1)
  let key2=Object.keys(obj2)

  if(key1.length !== key2.length){
    return false
  }
  for(let key of key1){
    if(!isEqual(obj1[key],obj2[key])){
      return false
    }
  }
  return true
}

console.log(isEqual(objA,objB));
console.log(isEqual(objB,objC));*/


// 2️⃣0️⃣ Find missing number in an array
// [1,2,4,5] → 3

let arr=[1,2,5,4]

/*arr.sort((a,b)=>a-b) //if it is not sorted 
let missing;
for(let i=0;i<arr.length;i++){ //also works if not sorted
  if(arr[i+1] !== arr[i]+1){
    missing=arr[i]+1
    break;
  }
}
console.log(missing);*/

//  using math formula
/*const n=5;  //last no of seq
let totalSum = (n*(n+1))/2  // formula to find sum of 1 to n numbers
let sumArr= arr.reduce((a,b)=>a+b)
let missing = totalSum - sumArr
console.log(missing);*/

// using loops
/*let missing=null;
let res=[]
for(let i=1;i<=arr.length+1;i++){
  if(!arr.includes(i)){
    missing = i
    // res.push(missing)
    arr.push(missing)
  }
  // res.push(arr[i])
}
console.log(missing);
console.log(arr);*/


// In a arr of obj in name field make center world as capital
/*let arr=[
  {name:'Kiran', id:21},
  {name:'Kumar', id:22},
  {name:'Rohan', id:23},
  {name:'Alice', id:24},
  {name:'John', id:25}
];

for (let i = 0; i < arr.length; i++) {
  let curName=arr[i].name;
  let midIndex=Math.floor(curName.length/2);

  let before=curName.substring(0,midIndex);
  let middle=curName.charAt(midIndex).toUpperCase();
  let after=curName.substring(midIndex+1);

  arr[i].name=before+middle+after
}

console.log(arr);*/





