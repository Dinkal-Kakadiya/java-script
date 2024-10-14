const arr = [10, 25, 30, 45, 21, 32, 56, 65, 12, 8, 88, 78];

const temp = arr.filter((val) => {
  if (val > 25) {
    return val;
  }
});

console.log(arr);
console.log(temp);

