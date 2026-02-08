// function* numbers(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// let gen=numbers()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* counter(num){
//     for(let i=0;i<=num;i++){
//         yield i
//     }
// }
// let out=counter(5)
// console.log(out.next().value);
// console.log(out.next().value);

// function* cal(){
//     let x= yield "Enter first num"
//     let y = yield 'Enter sec num'
//     return x+y
// }
// let out=cal()
// console.log(out.next())
// console.log(out.next(10).value);
// console.log(out.next(20).value);

// function* colors() {
//   yield "Red";
//   yield "Green";
//   yield "Blue";
// }

// for (let color of colors()) {
//   console.log(color);
// }

// function* number(num){
//   for(let i=0;i<=num;i++){
//     yield i
//   }
// }
// let g1=(number(5));
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)

function* num(n){
  for(let i=0;i<=n;i++){
    yield i
  }
}
let g1=num(5)
console.log(g1.next().value)
