const arr = [10, 15, 45, 22, 21, 51, 82, 55];
console.log(arr);

arr.map((val) => {
  if (val < 18) {
    console.log(18 - val, "=====");
    return 18 - val;
  } else {
    console.log(val);
    return val;
  }
});

// console.log(tmp);
console.log(arr);
