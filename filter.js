// 21 first
const arr = [10, 15, 45, 22, 21, 51, 82, 55];
// console.log(arr);
// console.log(arr.length);

const temp = arr.filter((val) => {
  if (val > 18) {
    return val;
  }
});
console.log(temp, "<<<<<<<<<<<<<<<<");
console.log(arr, ">>>>>>>>>>>>>>>>>>");

// const temp = arr.splice(2, 1);
// console.log("====", temp);
// console.log(arr);
