let arr=[
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

console.log(arr);
