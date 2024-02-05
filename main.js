// // ar1

// let n = 5;
// let arr = [];
// function getLevel2(n) {
//   for (let i = 1; i < n; i++) {
//     if (n > 0) {
//       arr.push(i ** 2);
//     }
//   }
//   return arr;
// }
// console.log(getLevel2(n));

// // ar3

// let nt = ["Banana", "Tuxum", "Olma", "Anor"];
// console.log(nt.reverse());

// ar4

let ar = [2, 3, 4, 5, 6, 7, 7, 9, 4, 7, 8, 11, 5];
let natija = [];

for (let i = 0; i < ar.length; i++) {
  if (ar[i] % 2 == 1) {
    natija.push(i);
  }
}
console.log(natija);
console.log(natija.length + " ta toq son mavjud");
