// let no = 25;
// let arr = "";

// for (let i = 1; i <= no * 2 - 1; i++) {
//   for (let j = 1; j <= (i <= no ? i : no * 2 - i); j++) {
//     arr = arr + "*";
//   }
//   arr = arr + "\n";
// }
// console.log(arr);

// let a = 10;
// let str = `hello${a}`;
// console.log(str);

// ******************************m Promise ****************************

// const getData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       const temp = fetch("https://jsonplaceholder.typicode.com/users")
//         .then((resolve) => console.log(resolve))
//         .catch((e) => console.log(e));
//       resolve(temp);
//     } catch (e) {
//       reject(e);
//     }
//   }, 5000);
// });

// const data = getData;

// console.log(data);

//
//
//
//
//

// let data = "Dinkal";

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// console.log(data);

//
//
//
//
//

// const def = () => {
//   let data = 10;
//   console.log(" 1 hello", data);
//   setTimeout(() => {
//     console.log(" 2 hello", data);
//   }, 3000);

//   data = 30;
//   console.log(" 3 hello", data);
// };

// def();

console.log(1);
console.log(2);
setTimeout(() => {
  console.log("hello");
}, 4000);
console.log(3);
console.log(4);
